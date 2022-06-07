const VoucherService = require("../service/voucher.service");

exports.generateQRCode = async (req, res) => {
  try {
    const url = await VoucherService.generateQrCode(req.params.id);

    res.status(200).json({ message: "QR Code URL", success: true, data: url });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message, success: true, data: [] });
  }
};