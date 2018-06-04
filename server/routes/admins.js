var express = require('express');
var router = express.Router();
var Goods = require('./../models/goods');
var Admin = require('./../models/admin');
require('./../util/util');

//商家注册接口
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

//登录保持状态cookies
router.get('/checkLogin',function(req,res,next){
  console.log(req.cookies.adminId);
  if(req.cookies.adminId){
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.adminName || ''
    });
  }else{
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    });
  }
});

//商家登出接口(清除cookie)
router.post("/logOut",function(req,res,next){
  res.cookie("adminId",'',{
    path: '/',
    maxAge: -1
  });
  res.json({
    status: '0',
    msg: '',
    result: ''
  });
});

//往商品列表中添加新的商品
router.post("/addProd",function(req,res,next){
  let goods = req.body.goods;
  let sysDate = new Date().Format('yyyyMMddhhmmss');  //直接在util.js中的Date原型上扩展的Format方法，所以可以直接调用Format()方法生成一个系统的时间
  let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
  goods.createDate = createDate;
  if(req.cookies.adminId){
    Goods.findOne({productId:goods.productId},function(err,Doc){
      if(Doc){
        res.json({
          status: '1',
          msg: '商品已存在！',
          result: ''
        });
      }else{
        var good = new Goods(goods);  //创建一个实例，调用一个函数必要要有一个实例调用，所以就需要创建出一个实例再去调用save方法，然后把数据保存到数据库中
        good.save(function(err1,doc1){
          if(err1){
            res.json({
              status: '1',
              msg: err.message,
              result: ''
            });
          }else{
            res.json({
              status: '0',
              msg: '',
              data: doc1
            });
          }
        });
      }
    });
  }
});

//下架商品
router.post('/productDel',function(req,res,next){
  let adminId = req.cookies.adminId;
  let productId = req.body.productId;
  if(adminId){
    Goods.remove({productId:productId},function(err,doc){
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
  }
});

//批量下架
router.post('/productsDel',function(req,res,next){
  let adminId = req.cookies.adminId;
  let productId = req.body.delProductId;
  //console.log(productId);
  if(adminId) {
    let status = '1';
    productId.forEach((item) => {
      Goods.remove({productId:item},function(err,doc){
        //console.log(status);
        if(err){
          status = '1';
        }else{
          status = '0';
        }
      });
    });
    if(status === '1'){
      res.json({
        status: '1',
        msg: 'err'
      });
    }else{
      res.json({
        status: '0',
        msg: 'suc'
      });
    }
    }
});

//修改商品信息
router.post('/updateProduct',function(req,res,next){
 let goods = req.body.goods;
 let sysDate = new Date().Format('yyyyMMddhhmmss');
 let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
   if(req.cookies.adminId){
     //console.log(goods);
       Goods.findOne({productId:goods.oldProductId},function(err,Doc){
         //console.log(userDoc);
         if(err){
           res.json({
             status: '1',
             msg: err.message,
             result: ''
           });
         }else{
          /* var good = new Goods(goods);*/
           let good = Doc;
           good.update({$set: {  //$set设置的要改的一些字段值
             productName: goods.productName,
             productId: goods.productId,
             productNum: goods.productNum,
             productType: goods.productType,
             salePrice: goods.salePrice,
             productImage: goods.productImage,
             createDate: createDate
           }}).update(function (err, result) {
             if (err) {
               res.json({
                 status: '1',
                 msg: err.msg
               })
             } else {
               res.json({
                 status: '0',
                 msg: 'suc'
               })
             }
           })
           // Goods.update({
           //   productId: goods.productId
           // },{
           //   "good.$.productName": goods.productName,
           //   "good.$.productId": goods.productId,
           //   "good.$.productNum": goods.productNum,
           //   "good.$.productType": goods.productType,
           //   "good.$.salePrice": goods.salePrice,
           //   "good.$.productImage": goods.productImage,
           //   "good.$.createDate": createDate
           // },function(err1,doc1){
           //   //console.log(good);
           //   if(err1){
           //     res.json({
           //       status: '1',
           //       msg: err1.message,
           //       result: ''
           //     });
           //   }else{
           //     res.json({
           //       status: '0',
           //       msg: '',
           //       result: good
           //     });
           //   }
           // });
         }
       });
   }
});

module.exports = router;
