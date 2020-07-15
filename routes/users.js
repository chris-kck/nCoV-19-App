var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET users listing.

function getData()  {
  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    console.log(row.id + ': ' + row.info);
    console.log("Zvikufaya");
    return row.id;
  })
  db.close();
}

 */

router.get('/', function(req, res, next) {
  res.render('users', {data:"getData()"});
});

module.exports = router;
