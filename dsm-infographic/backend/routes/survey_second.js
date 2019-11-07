var express = require('express');
var router = express.Router();
<<<<<<< Updated upstream
var fs = require('fs');
<<<<<<< Updated upstream
=======
var user = require("../public/user.json");
>>>>>>> Stashed changes
var survey = require("../public/survey.json");
=======
var mysql = require('mysql');
>>>>>>> Stashed changes

var connection = mysql.createConnection({
    host     : '34.85.52.178',
    user     : 'root',
    password : 'ghwns6699',
    database : 'info'
  });
  connection.connect();

router.post('/', function(req, res, next) {
<<<<<<< Updated upstream
    var fst = req.body.fst;
    var scd = req.body.scd;
    var trd = req.body.trd;

    if (fst == scd && scd == trd && trd == fst) {
        connection.query(`SELECT * from survey WHERE infonum = ${fst};`, function(err, rows, fields) { 
        res.send({output : rows[0]["sq"]});
        });
    }

    
    else{
        connection.query(`UPDATE survey SET sq = sq+5 WHERE infonum = ${fst};`, function(err, rows, fields) {
        connection.query(`UPDATE survey SET sq = sq+3 WHERE infonum = ${scd};`, function(err, rows, fields) { 
        connection.query(`UPDATE survey SET sq = sq+1 WHERE infonum = ${trd};`, function(err, rows, fields) { 

            res.send({output : "done"});

        }); 
        }); 
        }); 

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
