var express = require('express'); //通过NodeJS原生的封装
var router = express.Router();  //拿到express框架的路由
var mongoose = require('mongoose');  //要操作我们的数据库，就需要获取mongoose对象
var Goods = require('../models/goods');  //加载模型表，加载私有文件

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

//查询商品列表数据
router.get("/",function(req,res,next){      //二级路由，通过get拿到商品列表信息，接受一个回调
  let page = parseInt(req.param('page'));
  let pageSize = parseInt(req.param('pageSize'));  //get请求拿到的param都是字符串，所以需要转数据
  let sort = req.param("sort");
  let skip = (page-1)*pageSize;  //跳过分页前的几（skip）条数据
  let params = {};
  //利用Goods模板调用mongooseAPI进行数据库查询、调到指定页
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
  goodsModel.sort({'salePrice':sort});  //mongoDB的每一个条件都是object
  //如果exec()找到了匹配文本，就返回一个结果数组
  goodsModel.exec(function(err,doc){
    //console.log(doc);
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
          list: doc
        }
      });
    }
  });
});

module.exports = router; //正确输出路由后，在app.js中的（app.use("/goods",goods)）才能读取到goods.js的路由
