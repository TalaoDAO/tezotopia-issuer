const router = require('express').Router();
const issuerController = require('../controllers/issuerController');
const multer = require('multer')

const upload = multer();

// @route   GET api/issuer/:voucherId
// @desc    Generate QR Code for vouchers
// @access  public
router.get('/:voucherId', issuerController.generateQRCode);

// @route   GET api/issuer/:voucherId/:qrRandom
// @desc    Get Response with qrcode_random
// @access  public
router.get('/:voucherId/:qrRandom', issuerController.getChallenge);

// @route   POST api/issuer/:voucherId/:qrRandom
// @desc    Get Signed Voucher
// @access  public
router.post('/:voucherId/:qrRandom', upload.none(), issuerController.getSignedVoucher);


module.exports = router;