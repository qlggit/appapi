var express = require('express');
var router = express.Router();
router.get('/club',  function(req, res, next) {
    res.send({
        code:'10000',
        result:['QUEEN','酒吧','SPACE','SOHO']
    });
});
router.get('/city',  function(req, res, next) {
    res.send({
        code:'10000',
        result:[
            {
                areaCode:'110000',
                parentCode:'0',
                name:'北京',
            },
            {
                areaCode: '120000',
                parentCode:'0',
                name: '天津',
            },
            {
                areaCode: '310000',
                parentCode:'0',
                name: '上海',
            },
            {
                areaCode: '500000',
                parentCode:'0',
                name: '重庆',
            },
            {
                areaCode: '440100',
                parentCode:'44000',
                name: '广州',
            },
            {
                areaCode: '440300',
                parentCode: '44000',
                name: '深圳',
            },
            {
                areaCode: '420100',
                parentCode: '42000',
                name: '武汉',
            },
            {
                areaCode: '510100',
                parentCode: '51000',
                name: '成都',
            }]
    });
});
exports.router = router;
exports.__path = '/hot';