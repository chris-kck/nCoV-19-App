var express = require('express');
var db = require('../db');
var sequelize = require('sequelize');
var router = express.Router();

const getData = async (req, res, next) => {
    let eccases = await db.sequelize.query('SELECT MAX(`EC`) AS `total` FROM SACases');
    let fscases = await db.sequelize.query('SELECT MAX(`FS`) AS `total` FROM SACases');
    let gpcases = await db.sequelize.query('SELECT MAX(`GP`) AS `total` FROM SACases');
    let kzncases = await db.sequelize.query('SELECT MAX(`KZN`) AS `total` FROM SACases');
    let lpcases = await db.sequelize.query('SELECT MAX(`LP`) AS `total` FROM SACases');
    let mpcases = await db.sequelize.query('SELECT MAX(`MP`) AS `total` FROM SACases');
    let nccases = await db.sequelize.query('SELECT MAX(`NC`) AS `total` FROM SACases');
    let nwcases = await db.sequelize.query('SELECT MAX(`NW`) AS `total` FROM SACases');
    let wccases = await db.sequelize.query('SELECT MAX(`WC`) AS `total` FROM SACases');


    var dict = {};
    dict['EC_cases'] = eccases[0][0].total;
    dict['FS_cases'] = fscases[0][0].total;
    dict['GT_cases'] = gpcases[0][0].total;
    dict['KZN_cases'] = kzncases[0][0].total;
    dict['LIM_cases'] = lpcases[0][0].total;
    dict['NW_cases'] = nwcases[0][0].total;
    dict['NC_cases'] = nccases[0][0].total;
    dict['WC_cases'] = wccases[0][0].total;
    dict['MP_cases'] = mpcases[0][0].total;

    res.cases = dict;

    console.log(dict);
    //console.log(cases[0][0].total);

    next();
}

router.use(getData);

router.get('/', function(req, res, next) {
  res.render('users', res.cases);
});

module.exports = router;
