var express = require('express');
var router = express.Router();
var User = require('./../models/user');
require('./../util/util');
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

//注册接口
router.post("/reg",function(req,res,next){
  let userName = req.body.userRegName;
  let userPwd = req.body.userRegPwd;
  let userComPwd = req.body.userComPwd;
  let phone = req.body.userPhone;
  let email = req.body.userEmail;
  let question = req.body.userQuestion;
  let answer = req.body.userAnswer;
  let sysDate = new Date().Format('yyyyMMddhhmmss');  //直接在util.js中的Date原型上扩展的Format方法，所以可以直接调用Format()方法生成一个系统的时间
  let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
  let upDate = new Date().Format('yyyy-MM-dd hh:mm:ss');

  User.findOne({userName:userName},function(err,userDoc){
    if(userDoc){
      res.json({
        status: '1',
        msg: '账号已存在！',
        result: ''
      });
    }else{
      let r1 = Math.floor(Math.random() * 10);
      let r2 = Math.floor(Math.random() * 10);
      let userId = `${r1}${(Date.parse(new Date())) / 1000}${r2}`;

      User.insertMany({
        addressList: [],
        cartList: [],
        orderList: [],
        userId,
        userName,
        userPwd,
        userComPwd,
        phone,
        email,
        question,
        answer,
        createDate,
        upDate
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


//登录保持状态cookies
router.get('/checkLogin',function(req,res,next){
  if(req.cookies.userId){
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName || ''
    });
  }else{
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    });
  }
});

//查询当前用户的购物车数据
router.get('/cartList',function(req,res,next){
  var userId = req.cookies.userId;
  User.findOne({userId:userId},function(err,doc){
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      if(doc){
        res.json({
          status: '0',
          msg: '',
          result: doc.cartList
        });
      }
    }
  });
});

//删除购物车中的商品
router.post('/cartDel',function(req,res,next){
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  User.update({
    userId: userId
  },{  //不是把整个文档进行删除，所以只需要通过$pull来抽出要删除的数据并进行更新（这样就实现了要删除的数据）
    $pull: {  //相当于一个抽屉（抽出需要删除的商品数据）---mongodb的原子操作符---{$pull修饰符会删除掉数组中符合条件的元素}
      'cartList':{  //从cartList数组中删除符合productId的商品（即从cartList数组的productId中删除（抽出）productId的值）
        'productId': productId
      }
    }
  },function(err,doc){
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      res.json({
        status: '0',
        msg: '',
        result: 'suc'
      });
    }
  });
});
module.exports = router;
