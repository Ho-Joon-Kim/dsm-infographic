var express = require('express');
var router = express.Router();
var fs = require('fs');
<<<<<<< Updated upstream
=======
var user = require("../public/user.json");
>>>>>>> Stashed changes
var survey = require("../public/survey.json");


router.post('/', function(req, res, next) {
<<<<<<< Updated upstream
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

=======
    var q1_answer = req.body.q1;
    var q2_answer = req.body.q2;
    var infoNum = req.body.infoNum;
    var id = req.body.id;


    survey[infoNum]["q1"] = survey[infoNum]["q1"]+q1_answer;
    survey[infoNum]["q2"] = survey[infoNum]["q2"]+q2_answer;

    user[id]["info_s"] = `${user[id]["info_s"]} ${infoNum}`;

    
    fs.writeFileSync('public/survey.json', JSON.stringify(survey), 'utf-8',function(){

    });


    fs.writeFileSync('public/user.json', JSON.stringify(user), 'utf-8',function(){

    });

    res.send({output : "done"});
>>>>>>> Stashed changes
});

module.exports = router;
