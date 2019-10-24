var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    var info_id = req.query.imgid


    var filename = `../../public/info/${info_id}.png`;
    fs.readFile(filename,              //파일 읽기
        function (err, data)
        {
            res.writeHead(200, { "Context-Type": "image/png" });//보낼 헤더를 만듬
            res.write(data);   //본문을 만들고
            res.end();  //클라이언트에게 응답을 전송한다

        }
    );




});

module.exports = router;
