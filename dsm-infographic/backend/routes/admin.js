const express = require('express');
const router = express.Router();
cosnt mysql      = require('mysql');

cosnt connection = mysql.createConnection({
    host     : process.env[ip],
    user     : 'root',
    password : process.env[pswd],
    database : 'info'
  });
  connection.connect();



router.get('/', function(req, res, next) {
    const imgid = req.query.imgid;

    connection.query(`SELECT * from survey WHERE infonum = ${imgid};`, function(err, rows, fields) {

    const q1_a = rows[0]["q1"]
    const q2_a = rows[0]["q2"]

    res.send({ q1_a : q1_a, q2_a : q2_a})        
    });
});

module.exports = router;
