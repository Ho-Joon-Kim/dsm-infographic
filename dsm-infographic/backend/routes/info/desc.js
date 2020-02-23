const express = require('express');
const router = express.Router();
const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : process.env[ip],
    user     : 'root',
    password : process.env[pswd],
    database : 'info'
  });
  connection.connect();

router.get('/', function(req, res, next) {
    const desc_id = req.query.imgid

    

    const dsec = fs.readFileSync(`public/info/${desc_id}.txt`,'utf8');
    connection.query(`SELECT infoname from survey WHERE infonum = ${desc_id};`, function(err, rows, fields) {

    res.send({"desc" : dsec,title : rows[0]["infoname"]});
    });
});


module.exports = router;
