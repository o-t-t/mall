var express = require('express');
var router = express.Router();
var Admin = require('./../models/admin');
require('./../util/util');

//注册接口
router.post("/reg",function(req,res,next){
  let adminName = req.body.adminRegName;
  let adminPwd = req.body.adminRegPwd;
  let adminComPwd = req.body.adminComPwd;
  let adminPhone = req.body.adminPhone;
  let adminEmail = req.body.adminEmail;
  let sysDate = new Date().Format('yyyyMMddhhmmss');  //直接在util.js中的Date原型上扩展的Format方法，所以可以直接调用Format()方法生成一个系统的时间
  let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
  console.log(adminName);
  Admin.findOne({adminName:adminName},function(err,adminDoc){
    if(adminDoc){
      res.json({
        status: '1',
        msg: '账号已存在！',
        result: ''
      });
    }else{
      let r1 = Math.floor(Math.random() * 10);
      let r2 = Math.floor(Math.random() * 10);
      let adminId = `${r1}${(Date.parse(new Date())) / 1000}${r2}`;
      let role = 1;

      Admin.insertMany({
        adminId,
        adminName,
        adminPwd,
        adminComPwd,
        adminPhone,
        adminEmail,
        role,
        createDate,
      },function(err,result){
        //console.log(result);
        if(err){
          res.json({
            status: '0',
            msg: err.message,
            result: ''
          });
        }else{
          res.json({
            status: '0',
            msg: '注册成功',
            result: ''
          });
        }
      });
    }
  });
});

module.exports = router;
