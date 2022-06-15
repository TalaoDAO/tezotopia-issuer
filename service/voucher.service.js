const moment = require('moment');
const uuid = require('uuid');
const axios = require('axios');
const config = require("config");

const updateCredential = async (id, voucher, subjectId, correlation) => {
  const now = moment();

  const data = {
    blockchainTezos: correlation,
    expirationDate: now.add(voucher.credentialSubject.offers.duration, 'days').toDate(),
    issuanceDate: now.toDate(),
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

  return res ? res.data.voucher.voucher : null
}

module.exports = {
  updateCredential,
  storeSignedVoucher,
  getVoucherById
}