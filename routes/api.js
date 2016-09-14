var express = require('express');
var router = express.Router();
var User = require('../models/user');
var data = require('../db/data.js');

var data = [{id: 1, author: "dennis ritchie", text: "this is comment one."}, {id: 2, author: "bjarne stroustrop", text: "this is comment two."}];

/* GET home page. */
router.get('/comments', function(req, res, next) {
  res.send(data);  
});

module.exports = router;
