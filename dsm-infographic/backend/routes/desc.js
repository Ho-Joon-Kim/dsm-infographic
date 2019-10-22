var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
    var desc_id = req.query.desc


    var filename = `../public/info/${desc_id}.txt`;
    fs.readFile(filename,              //파일 읽기
        function (err, data)
        {       
            res.writeHead(200, { "Context-Type": "text/txt" });//보낼 헤더를 만듬
            res.write(data);   //본문을 만들고
            res.end();  //클라이언트에게 응답을 전송한다

        }
    );




});//   api/info?num=${}

module.exports = router;
