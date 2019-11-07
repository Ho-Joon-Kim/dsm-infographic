var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : '34.85.52.178',
    user     : 'root',
    password : 'ghwns6699',
    database : 'info'
  });
  connection.connect();

router.get('/', function(req, res, next) {
    var desc_id = req.query.imgid

    

    var dsec = fs.readFileSync(`public/info/${desc_id}.txt`,'utf8');
    connection.query(`SELECT infoname from survey WHERE infonum = ${desc_id};`, function(err, rows, fields) {

    res.send({"desc" : dsec,title : rows[0]["infoname"]});
    });
});


module.exports = router;
