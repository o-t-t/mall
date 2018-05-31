var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var filename = req.originalUrl.split('/')[3]
  fs.readFile(`public/images/${filename}`,'binary',function(err, file) {
    if (err) {
      console.log(err);
      return;
    }else{
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.write(file,'binary');
      res.end();
      return;
    }
  });
});

module.exports = router;
