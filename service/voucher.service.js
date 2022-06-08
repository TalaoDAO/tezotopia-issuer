const moment = require('moment');
const uuid = require('uuid');
const axios = require('axios');

const updateCredential = async (voucher, subjectId, correlation) => {
  const now = moment();

  voucher.voucher.credentialSubject.id = subjectId;
  voucher.voucher.id = `urn:uuid:${uuid.v4()}`;
  voucher.voucher.issuanceDate = now.toDate();
  voucher.voucher.expirationDate = now.add(voucher.voucher.credentialSubject.offers.duration, 'days').toDate();
  voucher.voucher.credentialSubject.associatedAddress.blockchainTezos = correlation;

  await voucher.save();

  return voucher;
};

const storeSignedVoucher = async (voucher) => {
  await sendToAnalytics(voucher);
}

const sendToAnalytics = async (voucher) => {
  return axios.post(
    'https://talao.co/analytics/api/newvoucher',
    voucher,
    {
      headers: {
        'accept': 'application/json',
        'key': 'SECRET_KEY'
      }
    }
  );
}

module.exports = {
  updateCredential,
  storeSignedVoucher,
}