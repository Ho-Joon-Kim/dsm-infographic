var express = require('express');
var router = express.Router();
var user = require("../public/user.json");



router.post('/', function(req, res, next) {
    var user_id = req.body.id;
    var user_pswd= req.body.pswd;

      if (user_id in user) 
    {
        if (user.user_id.pswd == user_pswd)
        {
            res.send(user.user_id.name)
        }

        else
        {
            res.send("error")
        }
    }

    else
    {
        res.send("error")
    }
});

module.exports = router;
