var express = require('express');
var router = express.Router();
var fs = require('fs');
var survey = require("../public/survey.json");


router.post('/', function(req, res, next) {
    var fst = req.body.fst;
    var scd = req.body.scd;
    var trd = req.body.trd;

    if (fst == scd && scd == trd && trd == fst) {
        res.send({output : survey[fst]["sq"]});
    }

    else{
        survey[fst]["sq"] = survey[fst]["sq"]+5;
        survey[scd]["sq"] = survey[scd]["sq"]+3;
        survey[trd]["sq"] = survey[trd]["sq"]+1;    

        fs.writeFileSync('public/survey.json', JSON.stringify(survey), 'utf-8',function(){
        });

        res.send({output : "done"});
    }

});

module.exports = router;
