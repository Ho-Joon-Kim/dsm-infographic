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

    var user_id = req.body.id;
    var user_pswd= req.body.pswd;
    


    connection.query(`SELECT * from user WHERE num = ${user_id};`, function(err, rows, fields) {
        console.log(rows[0]["pswd"])
        console.log(user_pswd)
        if(rows[0]["pswd"] == user_pswd)
        {
            res.send({ username : rows[0]["name"], loginchk : true})
        }
        else
        {
            res.send({ username : "", loginchk : false})
        }
    
      
    });
});

module.exports = router;
