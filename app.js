var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sqlite3 = require('sqlite3').verbose()
var nunjucks = require('nunjucks');

//Middleware Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Initialize Express Application
var app = express();

// view engine setup njucks with jinja2-similar formatting. using .htm suffix
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'htm');

nunjucks.configure('views', {
  express: app,
  autoescape: true
});
app.set('view engine', 'htm');

/*
Used to generate database Schema & Insert dummy data
var db = new sqlite3.Database('./db/sql.sqlite');
db.serialize(function () {
  db.run('CREATE TABLE lorem1 (info TEXT)')
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }
  stmt.finalize()
})

db.close()

*/



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Use the route paths below
app.use('/', indexRouter);
app.use('/users', usersRouter);


const db = require("./db");
db.sequelize.sync();

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
