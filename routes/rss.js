var express = require('express');
var db = require('../db');
var router = express.Router();

let Parser = require('rss-parser');
let parser = new Parser();



(async () => {

  let feed = await parser.parseURL('https://sacoronavirus.co.za/rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();






router.get('/', function(req, res, next) {

  res.render('rss');
});

router.post('/', function(req, res, next) {

  res.send('Woow Nicely handled post request');
});

module.exports = router;
