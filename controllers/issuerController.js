const { validationResult } = require('express-validator');
const crypto = require('crypto');
const moment = require('moment');
const Voucher = require('../models/voucher');
const client = require('../helpers/redis-client');
const { findUser, checkExpiration, storeSession } = require('../service/auth.service');
const { updateCredential } = require('../service/voucher.service');
const didkit = require("../helpers/didkit-handler");
const config = require("config");

exports.generateQRCode = async (req, res) => {
  const { params: { voucherId } } = req;

  try {
    const voucher = await Voucher.findById(voucherId);
    if (!voucher) {
      res.status(400).json({ message: 'No voucher found', success: false });
    }

    const user = await storeSession();

    const url = `https://tezotopia.talao.co/issuer/${voucher.id}/${user.id}?issuer=${user.issuer}`;

    res.status(200).json({ message: "QR Code URL", success: true, data: url });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message, success: false });
  }
};

exports.getChallenge = async (req, res) => {
  const { params: { voucherId, qrRandom } } = req;

  try {
    const voucher = await Voucher.findById(voucherId);

    if (!voucher) {
      return res.status(400).json({ message: 'Not found voucher', success: false });
    }

    const user = await findUser(qrRandom);
    if (!user) {
      return res.status(400).json({ message: 'Invalid session!', success: false });
    }

    const expired = await checkExpiration(user);
    if (expired) {
      return res.status(400).json({ message: 'Session expired!', success: false });
    }

    const challenge = crypto.randomBytes(8).toString('base64')
    user.challenge = challenge;
    const now = moment();
    user.date_time = now;

    await client.lSet(config.get('REDIS_KEY'), userIndex, JSON.stringify(user))

    const data = {
      "type": "CredentialOffer",
      "credentialPreview": voucher,
      "expires": now.add(5, 'minutes').toDate(),
      "challenge": challenge,
      "domain": "tezotopia.talao.co",
      "credential_manifest": ""    // TODO -> load it from local server
    };

    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).success('Server Error');
  }
}

exports.getSignedVoucher = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({message: errors.array()[0].msg, success: false});
  }

  const { presentation, Subject_id } = req.body;
  const { params: { voucherId, qrRandom } } = req;

  try {
    const user = await findUser(qrRandom);
    if (!user) {
      return res.status(400).json({ message: 'Invalid session!', success: false });
    }

    const expired = await checkExpiration(user);
    if (expired) {
      return res.status(400).json({ message: 'Session expired!', success: false });
    }

    const vp = JSON.parse(presentation);

    if (
      vp.proof.challenge !== user.challenge
      || vp.holder !== Subject_id
    ) {
      return res.status(404).json({ message: "Failed", success: false });
    }

    let voucher = await Voucher.findById(voucherId);
    if (!voucher) {
      return res.status(400).json({ message: 'Not found voucher', success: false });
    }

    voucher = await updateCredential(voucher, Subject_id, vp.verifiableCredential.correlation[0])

    const verificationMethod = await didkit.getVerificationMethod(config.get('DEFAULT_JWK'));

    // const signedVoucher = await verificationMethod(voucher);

    res.status(200).json(voucher);
  } catch (err) {
    res.status(400).send({ message: err.message, success: false });
  }
}