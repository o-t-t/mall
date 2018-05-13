var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "userId": String,
  "userName": String,
  "userPwd": String,
  "userComPwd": String,
  "email": String,
  "phone": String,
  "question": String,
  "answer": String,
  "orderStatus": String,
  "createDate": Date,
  "upDate": Date,
  "orderList": Array,
  "cartList": [
    {
      "productId": String,
      "productName": String,
      "salePrice": String,
      "productImage": String,
      "checked": String,
      "productNum": String
    }
  ],
  "addressList": [
    {
      "addressId": String,
      "userName": String,
      "province":
        {
          "provName": String,
          "provCode": String
        },
      "city":
        {
          "cityName": String,
          "streetName": String,
          "postCode": String
        },
      "postCode": Number,
      "tel": Number,
      "isDefault": Boolean
    }
  ]

});

module.exports = mongoose.model("User",userSchema);//通过Common规范，用module.export导出
