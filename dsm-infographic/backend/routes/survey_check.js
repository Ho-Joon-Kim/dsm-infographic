var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require("../public/user.json");


router.post('/', function(req, res, next) {
    var id = req.body.id;

    var check = user[id]["info_s"]
    var check_n = check.split(" ")

    res.send({survey_num : check, survey_count : check_n.length-1});
});

module.exports = router;
