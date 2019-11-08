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
    var id = req.body.id;

    connection.query(`SELECT * from user WHERE num = ${id};`, function(err, rows, fields) {
    var check = rows[0]["info_m"]
    var check_n = rows[0]["info_m"].split(" ")

    res.send({survey_num : check, survey_count : check_n.length-1});
});
});

module.exports = router;
