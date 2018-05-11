var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request')
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});
module.exports = router;
