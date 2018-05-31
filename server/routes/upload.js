var express = require('express')
var router = express.Router()
var multer  = require('multer')
var upload = multer({ dest: '../static' })  //告诉multer文件的存储位置

router.post('/', upload.single('goodsPic'), function(req, res, next){  //upload.single('goodsPic')表示单个文件上传
  var file = req.file;  //接收一个名为goodsPic的上传文件，所上传的文件会被保存在req.file。
 /* console.log(file);
  console.log('文件类型：%s', file.mimetype)
  console.log('原始文件名：%s', file.originalname)
  console.log('文件大小：%s', file.size)
  console.log('文件保存路径：%s', file.path)*/
  res.json({
    status: '0',
    msg: '',
    result: {
      path: file.path,
    }
  });
})

module.exports = router
