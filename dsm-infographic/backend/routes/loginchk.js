var express = require('express');
var router = express.Router();
var user = read("C:/Users/user/Documents/Git/dsm-infographic/dsm-infographic/backend/public/user.json");
/* GET home page. */
router.get('/', function(req, res, next) {
    userdata = JSON.parse(user);
    res.render('index', { title: 'userdata' });
});

module.exports = router;
