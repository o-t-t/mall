var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var logger = require('morgan');

var index = require('./routes/index');
var users = require('./routes/users');
var goods = require('./routes/goods');
var admins = require('./routes/admins');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.all('*', function(req, res, next) {
  // CORS配置
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//登录拦截（如果不登录，商品的其他操作，比如加入购物车就不能进行操作）
app.use(function(req,res,next){
  if(req.cookies.userId){
    next();
  }else{
    //req.originalUrl 当前接口地址(包括参数的地址)；获取不带参数的 url 地址 req.path
    //console.log(`path:${req.path}`,`originalUrl:${req.originalUrl}`)
    if(req.originalUrl == '/users/login' || req.originalUrl == '/users/logout' || req.originalUrl == '/users/reg' || req.originalUrl == '/admins/reg' || req.originalUrl == '/admins/login' || req.originalUrl.indexOf('/goods/list') > -1 ){
      next();
    }else{
      res.json({
        status: '1001',
        msg: '当前未登录',
        result: ''
      });
    }
  }
});

app.use('/', index);
app.use('/users', users);
app.use('/goods',goods);
app.use('/admins',admins);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
