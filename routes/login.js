var express = require('express');
var router = express.Router();

/* GET home page. */
var obj = { title: 'Express' };

router.get('/', function(req, res, next) {
  res.render('login', obj);
});

router.post('/', function(req, res, next) {
  res.status(403).send('<h1>Access Denied</h1> <br> <h2>You do not have access! Click <a href="/login">here</a> to go back and login as guest</h2>');
});

module.exports = router;
