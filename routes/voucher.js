const router = require('express').Router();
const voucherController = require('../controllers/voucherController');

// @route   GET get/vouchers/:id/qr-code
// @desc    Generate QR Code for vouchers
// @access  public
router.get('/:id/qr-url', voucherController.generateQRCode);

module.exports = router;