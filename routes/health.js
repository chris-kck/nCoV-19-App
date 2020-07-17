var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    res.render('health', {prevdate:(new Date()).getDate()-1});
});

router.post('/', function(req, res) {

    res.send('Woow Nicely handled post request');
});

module.exports = router;
