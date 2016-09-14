var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  date_joined: {type: Date, default: Date.now},
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
