const Voucher = require('../models/voucher');
const { storeSession } = require('./auth.service');

const generateQrCode = async (voucherId) => {
  const voucher = await Voucher.findById(voucherId);

  if (!voucher) {
    throw new Error('No voucher found');
  }

  const userData = await storeSession();

  const url = `https://tezotopia.talao.co/issuer/${'voucher.id'}/${userData.id}?issuer=${userData.issuer}`;

  return url;
};

module.exports = {
  generateQrCode,
}