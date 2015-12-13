// v1 users

var express = require('express')
  , router = express.Router();

router.get('/', function (req, res, next) {
  res.json({users: [], api: 'v1'});
});

module.exports = router;
