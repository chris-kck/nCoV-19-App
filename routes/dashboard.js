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

  let Wcases = await db.sequelize.query('SELECT `WHO_region` , Max(Cumulative_cases) AS Cases , Max(Cumulative_deaths) AS Deaths FROM WorldCases GROUP BY WHO_region', {
    type: db.sequelize.QueryTypes.SELECT
  });

  console.log(Wcases);

  //run all queries n store em here
  req.total = cases[0].total; // [ { total: 324221 } ]
  req.Wcases = Wcases; // Who regions nd total data

  next();
}

router.use(getCases);


router.get('/', function(req, res, next) {

  res.render('dashboard', {total:req.total, wdata:req.Wcases});
});

module.exports = router;
