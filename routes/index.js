var express = require('express');
var router = express.Router();

/* GET home page. */
var obj = { title: 'Express' };

router.get('/', function(req, res, next) {
  console.log(req.session.value );
  res.render('index', obj);
});

module.exports = router;
