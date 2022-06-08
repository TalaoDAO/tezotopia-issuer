const moment = require('moment');
const uuid = require('uuid');

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

module.exports = {
  updateCredential,
}