var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  "adminId" : String,
  "adminName" : String,
  "adminPwd" : String,
  "adminComPwd" : String,
  "adminPhone" : String,
  "adminEmail" : String,
  "createDate" : Date,
  "role": Number
});

module.exports = mongoose.model('Admin',adminSchema);
