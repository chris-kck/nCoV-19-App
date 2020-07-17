var express = require('express');
var router = express.Router();

/* GET home page. */
var obj = { title: 'Express' };

router.get('/', function(req, res, next) {
  res.render('login', obj);
});

router.post('/', function(req, res, next) {
  res.send('You do not have access! Go back and login as guest');
});

module.exports = router;
