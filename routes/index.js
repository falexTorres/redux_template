var express = require('express');
var router = express.Router();
var User = require('../models/user');
var data = require('../db/data.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  data.callMe();
  var unList = [];
  var pwList = [];

  User.find({}, function(err, users) {
    if (err) console.log(err);
    users.forEach(function(user) {
      console.log(user.username + " " + user.password);
      unList.push(user.username);
      pwList.push(user.password);
      console.log(unList);
      console.log(pwList);
    }); 
    console.log("printing each list on server side:\n" + unList + " " + pwList);
    res.render('index', { unList: unList, pwList: pwList, title: 'Express' });
  });
});

module.exports = router;
