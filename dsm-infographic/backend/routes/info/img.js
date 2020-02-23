const express = require('express');
const router = express.Router();
const fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    const info_id = req.query.imgid


    const filename = `public/info/${ info_id}.PNG`;
    fs.readFile(filename,              //파일 읽기
        function (err, data)
        {
            if(err) {
                console.log(err);
            } else {
                
            res.writeHead(res.statusCode.toString(), { "Context-Type": "image/png" });//보낼 헤더를 만듬
            res.write(data);   //본문을 만들고
            res.end();  //클라이언트에게 응답을 전송한다

            }
        }
    );

});

module.exports = router;