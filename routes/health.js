var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    res.render('health');
});

router.post('/', function(req, res) {

    res.send('Woow Nicely handled post request');
});

module.exports = router;
