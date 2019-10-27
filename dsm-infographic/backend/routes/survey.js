var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require("../public/user.json");
var survey = require("../public/survey.json");


router.post('/', function(req, res, next) {
    var q1_answer = req.body.q1;
    var q2_answer = req.body.q2;
    var infoNum = req.body.infoNum;
    var id = req.body.id;

    if(user[id]["info_m"] == infoNum)
    {
        res.send({output : "error"});
    }
    
    if(user[id]["info_m"] != infoNum){

        survey[infoNum]["q1"] = Number(survey[infoNum]["q1"])+Number(q1_answer);
        survey[infoNum]["q2"] = Number(survey[infoNum]["q2"])+Number(q2_answer);

        user[id]["info_s"] = `${user[id]["info_s"]} ${infoNum}`;
    
        fs.writeFileSync('public/survey.json', JSON.stringify(survey), 'utf-8',function(){
        });

        fs.writeFileSync('public/user.json', JSON.stringify(user), 'utf-8',function(){
        });
        res.send({output : "done"});
    }

   
});

module.exports = router;