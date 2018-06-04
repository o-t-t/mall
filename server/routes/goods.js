var express = require('express'); //通过NodeJS原生的封装
var router = express.Router();  //拿到express框架的路由
var mongoose = require('mongoose');  //要操作我们的数据库，就需要获取mongoose对象
var Goods = require('../models/goods');  //加载模型表，加载私有文件
var User = require('../models/user');
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/mall');

mongoose.connection.on("connected",function(){
  console.log("数据库连接成功");
});

mongoose.connection.on("error",function(){
  console.log("数据库连接失败");
});

mongoose.connection.on("disconnected",function(){
  console.log("数据库连接断开");
});

//查询商品列表数据 （get去拿数据）
router.get("/list",function(req,res,next) {      //二级路由，通过get拿到商品列表信息，接受一个回调
  var search = req.param("searchValue");
  let page = parseInt(req.param('page'));
  let pageSize = parseInt(req.param('pageSize'));  //get请求拿到的param都是字符串，所以需要转数据
  let priceLevel = req.param("priceLevel");
  let sort = req.param("sort");
  let proType = req.param("proType");
  let skip = (page - 1) * pageSize;  //跳过分页前的几（skip）条数据
  let priceGt = '';
  let priceLte = '';
  let params = {};
  if (priceLevel != 'all') {
    switch (priceLevel) {
      case '0':
        priceGt = 0;
        priceLte = 100;
        break;
      case '1':
        priceGt = 100;
        priceLte = 500;
        break;
      case '2':
        priceGt = 500;
        priceLte = 1000;
        break;
      case '3':
        priceGt = 1000;
        priceLte = 2000;
        break;
      case '4':
        priceGt = 2000;
        priceLte = 3000;
        break;
      case '5':
        priceGt = 3000;
        priceLte = 6000;
        break;
      case '6':
        priceGt = 6000;
        priceLte = 10000;
        break;
      case '7':
        priceGt = 10000;
        priceLte = 15000;
        break;
    }
    params = {
      salePrice: {
        $gt: priceGt,
        $lte: priceLte
      }
    }
  }
  //debugger
  if(proType != 0){
    switch (proType) {
      case '1':
        proType = "家用电器";
        break;
      case '2':
        proType = "钟表";
        break;
      case '3':
        proType = "服装";
        break;
      case '4':
        proType = "娱乐";
        break;
      case '5':
        proType = "食品";
        break;
      case '6':
        proType = "家具";
        break;
      case '7':
        proType = "鞋";
        break;
    }
  /*  params = {
      productType: [
        {
          typeName: proType
        }
      ]
    }*/
    //console.log(proType)
    params = {
      'productType.0.typeName': proType
    }
  }
  if(search){
    params = {
      productName: {
        $regex : search
      }
    }
  }

    //利用Goods模板调用mongooseAPI进行数据库查询、调到指定页
    let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
    //console.log(Goods.find(params));
    goodsModel.sort({'salePrice':sort});  //mongoDB的每一个条件都是object
    //如果exec()找到了匹配文本，就返回一个结果数组
    goodsModel.exec(function(err,doc){
      //console.log(doc);
      //console.log(search);
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
          result: {
            count: doc.length,
            list: doc,
          }
        });
      }
    });
  });

//加入购物车（向服务器提交数据，一般用post）
router.post("/addCart",function(req,res,next){
  var userId = req.cookies.userId;
  var productId = req.body.productId;

  User.findOne({userId:userId},function(err,userDoc){
    //console.log(userDoc);
    if(err){
      res.json({
        status: '1',
        msg: err.message
      });
    }else{
      if(userDoc){
        var goodsItem = '';
        userDoc.cartList.forEach(function(item){
          //console.log(item);
          if(item.productId == productId){
            //如果购物车中的商品已经存在，就只做商品数量+1
            goodsItem = item;
            item.productNum++;
          }
        });
        if(goodsItem){
          userDoc.save(function(err2,doc2){
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
                result: 'suc'
              });
            }
          });
        }else{
          //原来购物车中不存在的商品，往购物车里新添商品
          Goods.findOne({productId:productId},function(err1,doc){
            if(err1){
              res.json({
                status: '1',
                msg: err1.message,
                result: ''
              });
            }else{
              if(doc){
                //console.log(doc);
                doc.productNum = 1;
                doc.checked = 1;
                userDoc.cartList.push(doc);
                userDoc.save(function(err2,doc2){
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
                      result: 'suc'
                    });
                  }
                });
              }
            }
          });
        }
      }
    }
  });
});

//根据产品Id
router.get('/findProductById',function(req,res,next){
  let productId = req.param('productId');
  console.log(productId);
  Goods.findOne({productId: productId},function(err,Doc){
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: Doc
      });
    }
  });
});
module.exports = router; //正确输出路由后，在app.js中的（app.use("/goods",goods)）才能读取到goods.js的路由
