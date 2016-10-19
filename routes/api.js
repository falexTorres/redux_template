var express = require('express');
var router = express.Router();
var data = require('../db/data.js');

/* 
 *
 * api interface for mongodb
 *
 */

router.post('/users', function(req, res, next) {
  res.send("mucho gusto");
});

module.exports = router;
