var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  //console.log(req.session.value );
  res.render('login')
});

module.exports = router;
