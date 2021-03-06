var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  "productId": {type:String},
  "productName": String,
  "salePrice": Number,
  "checked":String,
  "productNum":Number,
  "productImage": String,
  "createDate": Date,
  "productType":[
    {
      "typeId": String,
      "typeName":String
    }
  ]
});

module.exports = mongoose.model('Good',productSchema);
