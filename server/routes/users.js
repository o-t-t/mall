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

//修改商品数量（加、减、选中操作）
router.post('/cartEdit',function(req,res,next){
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  let productNum = req.body.productNum;
  let checked = req.body.checked;

  /*  update方法有两个参数：
     一个是查询文档，用于过滤需要更新的目标文档；
     一个是修改器，即文档中要修改的内容。$作为一个占位符来更新一次update操作中的第一个符合条件的元素
      Users.update({"userId":userId,"cartList.productId":productId},{
      "cartList.$.productNum":productNum}*/
  User.update({"userId": userId,"cartList.productId": productId},{   //mongoose提供的update，能更快的去更新一个子文档
    "cartList.$.productNum": productNum,
    "cartList.$.checked": checked
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

//购物车商品的全选操作
router.post('/editCheckAll',function(req,res,next){
  let userId = req.cookies.userId;
  let checkAll = req.body.checkAll?'1':'0'
  User.findOne({userId:userId},function(err,user){   //批量更新子文档的checked属性（这里用的是User.findOne拿到当前的用户对象）
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      if(user){
        user.cartList.forEach((item) => {    //拿到当前的用户对象之后，通过遍历用户下面的子文档来批量保存
          item.checked = checkAll;
        });
        user.save(function(err1,doc){
          if(err1){
            res.json({
              status: '1',
              msg: err1.message,
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
    }
  });
});

//查询用户地址接口
router.get('/addressList',function(req,res,next){
  let userId = req.cookies.userId;
  User.findOne({userId:userId},function(err,doc){
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
        result: doc.addressList
      });
    }
  });
});

//更新地址
router.post('/updateAddress',function(req,res,next){
  let userId = req.cookies.userId;
  let addressId = req.body.addressId;
  let userName = req.body.userName;
  let provName = req.body.provName;
  let cityName = req.body.cityName;
  let streetName = req.body.streetName;
  let tel = req.body.tel;
  let isDefault = req.body.isDefault || false;
/*  console.log(userId);
  console.log(addressId);
  console.log(userName);
  console.log(provName);
  console.log(cityName);
  console.log(streetName);
  console.log(tel);
  console.log(isDefault);*/
  if(userId && addressId && userName && provName && cityName && streetName && tel){
    User.findOne({userId:userId},function(err,userDoc){
      //console.log(userDoc);
      if(err){
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        });
      }else{
        let addressList = userDoc.addressList;
        //console.log(addressList);
        //console.log(isDefault);
        if(isDefault){  //如果对地址进行修改，就把修改的地址设为默认地址
          addressList.forEach((item) =>{
            if(item.addressId === addressId){
              item.isDefault = true;
              item.userName = userName;
              //console.log(item.userName);
              item.provName = provName;
              item.cityName = cityName;
              item.streetName = streetName;
              item.tel = tel;
            }else{
              item.isdefault = false;
            }
          });
          addressList.forEach((item) => {
            if(item.addressId == addressId){
              item.isDefault = true;
            }else{
              item.isDefault = false;
            }
          });
          userDoc.save(function(err1,doc1){
            if(err1){
              res.json({
                status: '1',
                msg: err1.message,
                result: ''
              });
            }else{
              res.json({
                status: '0',
                msg: '',
                result: 'suc1'
              });
            }
          });
        }else{
          User.update({
            "addressList.addressId": addressId
          },{
            "addressList.$.userName": userName,
            "addressList.$.province.provName": provName,
            "addressList.$.city.cityName": cityName,
            "addressList.$.city.streetName": streetName,
            "addressList.$.tel": tel
          },function(err2,doc2){
            if(err2){
              res.json({
                status: '1',
                msg: err2.message,
                result: ''
              });
            }else{
              res.json({
                status: '0',
                msg: '',
                result: 'suc2'
              });
            }
          });
        }
      }
    });
  }
});

//新增收获地址
router.post('/addAddress',function(req,res,next){
  let userId = req.cookies.userId;
  let addressId = req.body.addressId;
  let userName = req.body.userName;
  let provName = req.body.provName;
  let cityName = req.body.cityName;
  let streetName = req.body.streetName;
  let tel = req.body.tel;
  let isDefault = req.body.isDefault;

  //console.log(provName);
  if(userId && userName && provName && cityName && streetName && tel){
    User.findOne({userId:userId},function(err,doc){
      if(err){
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        });
      }else{
        let addressList = doc.addressList;
        if(isDefault){
          addressList.forEach((item, i) => {
            item.isDefault = false;
          })
        }
        addressList.push({
          "addressId": parseInt(Date.parse(new Date())),
          userName,
          "province":{provName},
          "city":{cityName,streetName},
          tel,
          isDefault: isDefault
        });

        doc.save(function(err1,doc1){
          if(err1){
            res.json({
              status: '1',
              msg: err1.message,
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
  }
});

//设置默认地址（默认地址只有一个）
router.post('/setDefault',function(req,res,next){
  let userId = req.cookies.userId;
  let addressId = req.body.addressId;
  if(!addressId){
    res.json({
      status: '1000',
      msg: 'addressId is NULL',
      result: ''
    });
  }else{
    User.findOne({userId:userId},function(err,doc){
      if(err){
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        });
      }else{
        let addressList = doc.addressList;
        addressList.forEach((item) => {
          if(item.addressId == addressId){
            item.isDefault = true;
          }else{
            item.isDefault = false;
          }
        });

        doc.save(function(err1,doc1){
          if(err1){
            res.json({
              status: '1',
              msg: err1.message,
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
  }
});

//删除地址
router.post('/delAddress',function(req,res,next){
  let userId = req.cookies.userId;
  let addressId = req.body.addressId;
  User.findOne({
    userId:userId
  },function(err,doc){
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      if(doc.addressList.length > 1){
        User.update({
          userId:userId
        },{
          $pull: {
            'addressList': {
              'addressId': addressId
            }
          }
        },function(err1,doc1){
          if(err1){
            res.json({
              status: '1',
              msg: err1.message,
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
      }else{
        res.json({
          status: '1',
          msg: '至少保留一条地址',
          result: ''
        });
      }
    }
  });
});

//创建订单
router.post('/payMent',function(req,res,next){
  let userId = req.cookies.userId;
  let addressId = req.body.addressId;
  let orderTotal = req.body.orderTotal;
  User.findOne({userId: userId},function(err,doc){
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      let address = '';
      let goodsList = [];
      //获取当前用户的地址信息
      doc.addressList.forEach((item) => {
        if(item.addressId == addressId){
          address = item;
        }
      });

      //获取用户购物车中需要购买的商品
      doc.cartList.forEach((item) => {
        if(item.checked == '1'){
          goodsList.push(item);
        }
      });

      //创建订单号
      let platform = '688';
      let r1 = Math.floor(Math.random()*10);
      let r2 = Math.floor(Math.random()*10);
      let sysDate = new Date().Format('yyyyMMddhhmmss');
      let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
      var orderId = platform + r1 + sysDate + r2;

      var order = {
        orderId: orderId,
        orderTotal: orderTotal,
        addressInfo: address,
        goodsList: goodsList,
        orderStatus: '1',
        createDate: createDate
      }

      doc.orderList.push(order);
      doc.save(function(err1,doc1){
        if(err1){
          res.json({
            status: '1',
            msg: err1.message,
            result: ''
          });
        }else{
          res.json({
            status: '0',
            msg: '',
            result: {
              orderId: order.orderId,
              orderTotal: order.orderTotal,
              addressInfo: order.addressInfo,
              goodsList: order.goodsList,
              createDate: order.createDate
            }
          });
        }
      });
    }
  });
});

//根据订单Id查询订单详细信息
router.get('/orderDetail',function(req,res,next){
  let userId = req.cookies.userId;
  let orderId = req.param("orderId");
  User.findOne({userId:userId},function(err,userInfo){
    //console.log(userInfo);
    if(err){
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      var orderList = userInfo.orderList;
      //console.log(orderList);
      if(orderList.length>0){
        var orderTotal = 0;
        var addressInfo = {};
        var goodsList = [];
        var createDate = '';
        orderList.forEach((item) => {
          if(item.orderId == orderId){
            orderTotal = item.orderTotal;
            addressInfo = item.addressInfo;
            //console.log(addressInfo);
            goodsList = item.goodsList;
            createDate = item.createDate;
          }
        });
        if(orderTotal>0){
          res.json({
            status: '0',
            msg: '',
            result: {
              orderId : orderId,
              orderTotal: orderTotal,
              addressInfo: addressInfo,
              goodsList: goodsList,
              createDate: createDate
            }
          });
        }else{
          res.json({
            status: '12000',
            msg: '订单不生效',
            result: ''
          });
        }
      }else{
        res.json({
          status: '12001',
          msg: '当前用户未创建订单',
          result: ''
        });
      }
    }
  });
});

//获取购物车商品数量
router.get('/getCartCount',function(req,res,next){
  if(req.cookies && req.cookies.userId){
    let userId = req.cookies.userId;
    User.findOne({userId:userId},function(err,doc){
      if(err){
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        });
      }else{
        let cartList = doc.cartList;
        let cartCount = 0;
        cartList.forEach((item) => {
          cartCount += parseFloat(item.productNum);
        });
        res.json({
          status: '0',
          msg: '',
          result: cartCount
        });
      }
    });
  }else{
    res.json({
      status: '1',
      msg: '当前用户不存在'
    });
  }
});
module.exports = router;
