var express = require('express');
var router = express.Router();
var User = require('./../models/user');

//登录接口
router.post("/login",function(req,res,next){
  var param = {
    userName : req.body.userName,
    userPwd: req.body.userPwd
  }

  User.findOne(param,function(err,doc){
    //console.log(doc);
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      if(doc){
        res.cookie("userId",doc.userId,{  //1、cookie名称;2、cookie的值；3、设定cookie的一些参数
          path: '/',   //把cookie放在服务器根目录
          maxAge: 1000*60*60  //cookie 的周期为1小时
        });
        res.cookie("userName",doc.userName,{
          path: '/',
          maxAge: 1000*60*60
        });
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.userName
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

//登出接口(清除cookie)
router.post("/logout",function(req,res,next){
  res.cookie("userId",'',{
    path: '/',
    maxAge: -1
  });
  res.json({
    status: '0',
    msg: '',
    result: ''
  });
});
module.exports = router;
