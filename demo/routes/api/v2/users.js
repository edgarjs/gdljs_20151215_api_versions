// v2 users

var express = require('express')
  , router = express.Router();

router.get('/', function (req, res, next) {
  res.json({data: [], api: 'v2'});
});

module.exports = router;
