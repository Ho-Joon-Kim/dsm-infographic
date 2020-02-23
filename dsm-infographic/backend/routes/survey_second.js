const express = require('express');
const router = express.Router();

const fs = require('fs');


const user = require("../public/user.json");

const survey = require("../public/survey.json");

const mysql = require('mysql');


const connection = mysql.createConnection({
    host     : process.env[ip],
    user     : 'root',
    password : process.env[pswd],
    database : 'info'
});
connection.connect();

router.post('/', function (req, res, next) {

    const fst = req.body.fst;
    const scd = req.body.scd;
    const trd = req.body.trd;

    if (fst == scd && scd == trd && trd == fst) {
        connection.query(`SELECT * from survey WHERE infonum = ${fst};`, function (err, rows, fields) {
            res.send({ output: rows[0]["sq"] });
        });
    }


    else {
        connection.query(`UPDATE survey SET sq = sq+5 WHERE infonum = ${fst};`, function (err, rows, fields) {
            connection.query(`UPDATE survey SET sq = sq+3 WHERE infonum = ${scd};`, function (err, rows, fields) {
                connection.query(`UPDATE survey SET sq = sq+1 WHERE infonum = ${trd};`, function (err, rows, fields) {

                    res.send({ output: "done" });

                });
            });
        });

    }


    const q1_answer = req.body.q1;
    const q2_answer = req.body.q2;
    const infoNum = req.body.infoNum;
    const id = req.body.id;


    survey[infoNum]["q1"] = survey[infoNum]["q1"]+q1_answer;
    survey[infoNum]["q2"] = survey[infoNum]["q2"]+q2_answer;

    user[id]["info_s"] = `${user[id]["info_s"]} ${infoNum}`;


    fs.writeFileSync('public/survey.json', JSON.stringify(survey), 'utf-8',function(){

    });


    fs.writeFileSync('public/user.json', JSON.stringify(user), 'utf-8',function(){

    });

    res.send({output : "done"});

});

module.exports = router;
