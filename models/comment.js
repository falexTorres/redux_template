var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  id: {type: Schema.ObjectId, auto: true},
  author: String,
  text: String
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
