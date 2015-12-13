var express = require('express')
  , router = express.Router();

var users = require('./users');

router.use('/users', users);

module.exports = router;
