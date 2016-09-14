var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log()
  console.log(req);
  res.send('respond with a resource');
})

module.exports = router;
