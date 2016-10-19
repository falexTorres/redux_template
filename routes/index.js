var express = require('express');
var router = express.Router();
var User = require('../models/user');
var data = require('../db/data.js');

/* GET and return home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

module.exports = router;
