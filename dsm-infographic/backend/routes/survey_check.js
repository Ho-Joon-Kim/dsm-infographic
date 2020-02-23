const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : process.env[ip],
    user     : 'root',
    password : process.env[pswd],
    database : 'info'
  });
  connection.connect();


router.post('/', function(req, res, next) {
    const id = req.body.id;

    connection.query(`SELECT * from user WHERE num = ${id};`, function(err, rows, fields) {
    const check = rows[0]["info_m"]
    const check_n = rows[0]["info_m"].split(" ")

    res.send({survey_num : check, survey_count : check_n.length-1});
});
});

module.exports = router;
