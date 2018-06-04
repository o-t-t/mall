var express = require('express')
var router = express.Router()
var multer  = require('multer')
//var upload = multer({ dest: '../static' })  //告诉multer文件的存储位置

var storage = multer.diskStorage({   //可以使用硬盘存储模式设置在哪里存放上传的附件
  destination: function (req, file, cb) {
    cb(null, '../static');    // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    var name = file.originalname.split('.')[0];
    var type = file.originalname.split('.')[1];
    cb(null, name + '-' + Date.now() + '.' + type);
  }
});
var upload = multer({ storage: storage })

////注意上传界面中的 <input type="file" name="avatar"/>中的name必须是下面代码中指定的名称
router.post('/', upload.single('goodsPic'), function(req, res, next){  //upload.single('goodsPic')表示单个文件上传
  var file = req.file;  //接收一个名为goodsPic的上传文件，所上传的文件会被保存在req.file。
  console.log(file);
  console.log('文件类型：%s', file.mimetype)
  console.log('原始文件名：%s', file.originalname)
  console.log('文件大小：%s', file.size)
  console.log('文件保存路径：%s', file.path)

  res.json({
    status: '0',
    msg: '',
    result: file.path
  });
})

module.exports = router
