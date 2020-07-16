var express = require('express');
var db = require('../db');
var router = express.Router();

let Parser = require('rss-parser');
let parser = new Parser();

const rssfeed = async function (req, res, next) {

  let feed = await parser.parseURL('https://sacoronavirus.co.za/rss');
  let feed1 = await parser.parseURL('https://news.google.com/rss/topics/CAAqBwgKMO2-mAswtMmwAw?hl=en-ZA&gl=ZA&ceid=ZA%3Aen');

  req.feed = feed;
  req.feed1 = feed1;

  next();
};

router.use(rssfeed);

router.get('/', function(req, res, next) {
  console.log(req.feed.title);
  res.render('rss', {data:req.feed, data1:req.feed1});
});

router.post('/', function(req, res, next) {

  res.send('Woow Nicely handled post request');
});

module.exports = router;
