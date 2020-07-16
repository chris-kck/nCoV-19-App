var express = require('express');
var router = express.Router();

/* GET dashboard page. */
var obj = { title: 'Express' };

router.get('/', function(req, res, next) {
  console.log(req.session.value );
  res.render('dashboard', obj);
});

module.exports = router;
