var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require("../public/user.json");
var survey = require("../public/survey.json");


router.get('/', function(req, res, next) {
    var q1_answer = req.body.q1;
    var q2_answer = req.body.q2;
    var infoNum = req.body.infoNum;
    var id = req.body.id;

    survey[infoNum]["q1"] = q1_answer;
    survey[infoNum]["q2"] = q2_answer;

    user[id]["info_s"] = `${user[id]["info_s"]} ${infoNum}`;

    
    fs.writeFileSync('public/survey.json', JSON.stringify(survey), 'utf-8',function(){

    });


    fs.writeFileSync('public/user.json', JSON.stringify(user), 'utf-8',function(){

    });

    res.send({output : "done"});
});

module.exports = router;
