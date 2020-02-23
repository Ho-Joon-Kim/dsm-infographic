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

    const user_id = req.body.id;
    const user_pswd= req.body.pswd;
    


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
