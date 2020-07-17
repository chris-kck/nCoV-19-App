var express = require('express');
var router = express.Router();

/* GET home page. */
var obj = { title: 'Express' };

router.get('/', function(req, res, next) {
  res.render('login', obj);
});

module.exports = router;
