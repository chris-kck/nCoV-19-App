var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var nunjucks = require('nunjucks');
var session = require('express-session')

//Middleware Routes
var indexRouter = require('./routes/index');
var samapRouter = require('./routes/samap');
var rssRouter = require('./routes/rss');
var healthRouter = require('./routes/health');
var dashboardRouter = require('./routes/dashboard');
var loginRouter = require('./routes/login')
var selfRouter = require('./routes/self')
var quizRouter = require('./routes/quiz')
var faqRouter = require('./routes/faq')



//Initialize Express Application
var app = express();

// view engine setup njucks with jinja2-similar formatting. using .htm suffix
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'htm');

nunjucks.configure('views', {
  express: app,
  autoescape: true
});
app.set('view engine', 'htm'); //file extension



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(session({name:"sid", resave: true, saveUninitialized: true, secret: 'ABRACADABRA2!ABRACADABRA', cookie: { maxAge: 60000 }}));

app.use(express.static(path.join(__dirname, 'public'))); //where all my public files will be

//Use the route paths below
app.use('/', indexRouter);
app.use('/samap', samapRouter);
app.use('/rss', rssRouter);
app.use('/health', healthRouter);
app.use('/dashboard', dashboardRouter);
app.use('/login', loginRouter);
app.use('/self', selfRouter);
app.use('/quiz', quizRouter);
app.use('/faq', faqRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;