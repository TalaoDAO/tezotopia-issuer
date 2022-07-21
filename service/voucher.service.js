const moment = require('moment');
const uuid = require('uuid');
const axios = require('axios');
const config = require("config");

const updateCredential = async (id, voucher, subjectId, correlation) => {
  const now = moment();

  const duration = voucher.credentialSubject.offers ? voucher.credentialSubject.offers[0].duration : voucher.credentialSubject.duration

  const data = {
    blockchainTezos: correlation,
    expirationDate: now.add(duration, 'days').toDate(),
    issuanceDate: moment().toDate(),
    voucherId: `urn:uuid:${uuid.v4()}`,
    subjectId: subjectId,
  };

  const res = await axios.put(
      `${config.get('VOUCHER_API_URL')}/api/vouchers/${id}`,
      data,
      {
        headers: {
          'accept': 'application/json',
          'key': 'SECRET_KEY'
        }
      }
  );

  if(res && res.data.success) {
    return await getVoucherById(id);
  }

  return null;
};

const storeSignedVoucher = async (voucher) => {
  await sendToAnalytics(voucher);
}

const sendToAnalytics = async (voucher) => {
  return axios.post(
    `${config.get('ANALYZE_API_URL')}/api/newvoucher`,
    voucher,
    {
      headers: {
        'accept': 'application/json',
        'key': 'SECRET_KEY'
      }
    }
  );
}

const getVoucherById = async (id) => {
  const res = await axios.get(
      `${config.get('VOUCHER_API_URL')}/api/vouchers/${id}`,
      {
        headers: {
          'accept': 'application/json',
          'key': 'SECRET_KEY'
        }
      }
  );

  if(res && res.data.voucher) {
    return res.data.voucher.voucher
  } else if(res && res.data.membershipCard) {
    return res.data.membershipCard.membershipCards
  }

  return null
}

module.exports = {
  updateCredential,
  storeSignedVoucher,
  getVoucherById
}
