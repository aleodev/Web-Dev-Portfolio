var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');

// Routes
var index = require('./routes/index');

// Express Init
var app = express();

// Routes
app.use('/', index);

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Logger
app.use(logger('dev'));

// Body Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Cookie Parsing
app.use(cookieParser());

// Serve Assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(compression());


// 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error Handler
app.use(function(err, req, res, next) {
  // Only Err In Dev
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {};

  // Render an error
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen( process.env.PORT || 3001, function(){
  console.log('Listening on port ' + server.address().port);
});