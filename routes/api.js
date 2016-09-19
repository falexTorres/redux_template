var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var data = require('../db/data.js');

var datum = [{id: 1, author: "dennis ritchie", text: "this is comment one."}, {id: 2, author: "bjarne stroustrop", text: "this is comment two."}];

/* GET home page. */
router.get('/comments', function(req, res, next) {
  var data = datum;

  Comment.find({}, function(err, comments) {

    comments.forEach(function(comment) {
      var includes = false;
      for(var i = 1; i <= data.length; i++) {
        if (comment.text == data[i-1].text) includes = true;
      }
      if (!includes) data.push(comment);
    });

    res.send(data);

  });

});

router.post('/comments', function(req, res, next) {
  if (req.body.author && req.body.text) {
    var comment = new Comment({author: req.body.author.trim(), text: req.body.text.trim()});
    comment.save(function(err) {
      if (err) console.log(err);
    });
  }

  var data = datum;

  Comment.find({}, function(err, comments) {

    comments.forEach(function(comment) {
      var includes = false;
      for(var i = 1; i <= data.length; i++) {
        if (comment.text == data[i-1].text) includes = true;
      }
      if (!includes) data.push(comment);
    });

    res.send(data);

  });

});

module.exports = router;
