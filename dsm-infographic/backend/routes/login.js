var express = require('express');
var router = express.Router();
var user = require("../public/user.json");



router.post('/', function(req, res, next) {
    var user_id = req.body.id;
    var user_pswd= req.body.pswd;

    console.log(user[user_id]["pswd"])

    if(user[user_id])
    {
        if(user[user_id]["pswd"] == req.body.pswd)
        {
            res.send(user[user_id]["name"])
        }
    }
    else
    {
        res.send("error")
    }
});

module.exports = router;
