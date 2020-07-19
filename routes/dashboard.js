var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET dashboard page. */
const getCases = async (req, res, next) => {
  let cases = await db.sequelize.query('SELECT total FROM SACases ORDER BY SACases.id DESC LIMIT 1', {
    //replacements: {id: req.user.id},
    type: db.sequelize.QueryTypes.SELECT
  });
  console.log(cases);

  let Wcases = await db.sequelize.query('SELECT `WHO_region` , Sum(WorldCases.New_cases) AS Cases , Sum(WorldCases.New_deaths) AS Deaths FROM WorldCases GROUP BY WHO_region', {
    type: db.sequelize.QueryTypes.SELECT
  });

  console.log(Wcases);

  //run all queries n store em here
  req.total = cases[0].total; // [ { total: 324221 } ]
  req.Wcases = Wcases; // Who regions nd total data

  req.Wtotal = 0
  for (let i = 0; i <7 ; i++) {
    req.Wtotal += Wcases[i].Cases;
  }

  req.Wdtotal = 0
  for (let i = 0; i <7 ; i++) {
    req.Wdtotal += Wcases[i].Deaths;
  }


  next();
}

router.use(getCases);


router.get('/', function(req, res, next) {

  res.render('dashboard', {total:req.total, wdata:req.Wcases, Wtotal:req.Wtotal, Wdtotal:req.Wdtotal});
});

module.exports = router;
