var express = require('express');
var router = express.Router();
var account = require('./account');
/* GET home page. */
router.use('/account', account);

module.exports = router;
