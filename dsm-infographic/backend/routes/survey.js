var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '34.85.52.178',
    user     : 'root',
    password : 'ghwns6699',
    database : 'info'
  });
  connection.connect();


router.post('/', function(req, res, next) {
    var q1_answer = req.body.q1;
    var q2_answer = req.body.q2;
    var infoNum = req.body.infoNum;
    var id = req.body.id;

    connection.query(`SELECT * from user WHERE num = ${id};`, function(err, rows, fields) {  
        if(rows[0]["info_s"] == infoNum)
        {
            res.send({output : "error"});
        }
    });

    var q1q2 = Number(q1_answer)+Number(q2_answer)
    console.log(q1q2)
    var num = ""
    
    connection.query(`UPDATE survey SET q1 = q1+${q1_answer} WHERE infonum = ${infoNum};`, function(err, rows, fields) {
    connection.query(`UPDATE survey SET q2 = q2+${q2_answer} WHERE infonum = ${infoNum};`, function(err, rows, fields) {
    connection.query(`SELECT * from user WHERE num = ${id};`, function(err, rows, fields) {  num =`${rows[0]["info_m"]} ${infoNum}`;
    connection.query(`UPDATE user SET info_m = "${num}" WHERE num = ${id};`, function(err, rows, fields) {
    infoNum = `i${infoNum}`
    connection.query(`UPDATE user SET ${infoNum} = ${q1q2} WHERE num = ${id};`, function(err, rows, fields) {


    
        res.send({output : "done"});
    
    }); 
    }); 
    }); 
    }); 
    }); 

   
});

module.exports = router;