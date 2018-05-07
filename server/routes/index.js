var express = require('express');
var router = express.Router();
var request = require('request')
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Alex O Resume'})
});
module.exports = router;
