var express = require('express');
var router = express.Router();
var fs = require('fs');
var survey = require("../public/survey.json");


router.get('/', function(req, res, next) {
    var desc_id = req.query.imgid

    var dsec = fs.readFileSync(`../public/info/${desc_id}.txt`,'utf8');
    res.send({"desc" : dsec,title : survey[desc_id]["infoN"]})




});


module.exports = router;
