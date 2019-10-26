var express = require('express');
var router = express.Router();
var fs = require('fs');
var survey = require("../public/survey.json");



router.get('/', function(req, res, next) {
    var imgid = req.query.imgid;


    var q1_a = survey[imgid]['q1'];
    var q2_a = survey[imgid]['q2'];

    res.send({ q1_a : q1_a, q2_a : q2_a})
    

        
});

module.exports = router;
