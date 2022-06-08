const router = require('express').Router();

router.use('/api/issuer', require('./issuer'));

module.exports = router;
