var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('rss');
});

router.post('/', function(req, res, next) {

  res.send('Woow Nicely handled post request');
});

module.exports = router;
