const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname) })

const connection = mysql.createConnection({
    host     : process.env[ip],
    user     : 'root',
    password : process.env[pswd],
    database : 'info'
  });
  connection.connect();


router.post('/', function(req, res, next) {
    const q1_answer = req.body.q1;
    const q2_answer = req.body.q2;
    const infoNum = req.body.infoNum;
    const id = req.body.id;

    connection.query(`SELECT * from user WHERE num = ${id};`, function(err, rows, fields) {  
        if(rows[0]["info_s"] == infoNum)
        {
            res.send({output : "error"});
        }
    });

    const q1q2 = Number(q1_answer)+Number(q2_answer)
    console.log(q1q2)
    const num = ""
    
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