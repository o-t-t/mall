var express = require('express');
var router = express.Router();
var Admin = require('./../models/admin');
require('./../util/util');

//商家接口
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

//商家登录
router.post("/login",function(req,res,next){
  var param = {
    adminName : req.body.adminName,
    adminPwd: req.body.adminPwd
  }

  Admin.findOne(param,function(err,doc){
    //console.log(doc);
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      if(doc){
        res.cookie("adminId",doc.adminId,{  //1、cookie名称;2、cookie的值；3、设定cookie的一些参数
          path: '/',   //把cookie放在服务器根目录
          maxAge: 1000*60*60  //cookie 的周期为1小时
        });
        res.cookie("adminName",doc.adminName,{
          path: '/',
          maxAge: 1000*60*60
        });
        res.json({
          status: '0',
          msg: '',
          result: {
            adminName: doc.adminName
          }
        });
      }else{
        res.json({
          status: '2',
          result: '账号或密码错误'
        });
      }
    }
  });
});
module.exports = router;
