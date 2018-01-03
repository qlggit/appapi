var express = require('express');
var router = express.Router();
router.get('/data',  function(req, res, next) {
    useData.getAreaData(req , res , function(a){
        res.send({
            code:'10000',
            result:a
        });
    })
});
router.get('/search',  function(req, res, next) {
    var value = req.query.value;
    var reg = new RegExp('.*' + value.split('').join('.*') + '.*');
    useData.getAreaData(req , res , function(a){
        res.send({
            code:'10000',
            result:a.filter(function(b){
                return reg.test(b.alphabetical) || reg.test(b.alphabeticalFirstAlphabet)  || reg.test(b.name)
            })
        });
    })
});
router.get('/search/child',  function(req, res, next) {
    var areaCode = req.query.areaCode;
    var specCode = ['110000','120000','500000','310000'];
    if(specCode.indexOf(areaCode) === -1){
        useData.getChildData(req , res , areaCode , function(data){
            res.send({
                code:'10000',
                result:data.sort(function(a,b){
                    return a.alphabetical > b.alphabetical?1:-1;
                }),
            })
        })
    }else{
        useData.getChildData(req , res , areaCode , function(data){
            var all = [];
            var resData = [];
            if(data){
                data.forEach(function(a){
                    all.push(new Promise(function(rev , rej){
                        useData.getChildData(req , res , a.areaCode , function(data){
                            if(data){
                                resData = resData.concat(data);
                                rev();
                            }else rej();
                        })
                    }))
                });
                Promise.all(all).then(function(){
                    res.send({
                        code:'10000',
                        result:resData.sort(function(a,b){
                            return a.alphabetical > b.alphabetical?1:-1;
                        }),
                    })
                }).catch(function(){
                    res.send({
                        code:'1',
                        result:resData,
                    })
                })
            }else{
                res.send({
                    code:'1',
                    result:resData,
                })
            }

        })
    }
});
router.get('/search/code',  function(req, res, next) {
    var cityName = req.query.cityName;
    var regPart = new RegExp('.*' + cityName + '.*');
    useData.getAreaData(req , res , function(a){
        var code;
        if(a.every(function(b){
                if(b.name === cityName){
                    code = b.areaCode;
                    return false;
                }
                return true;
            })){
            a.every(function(b){
                if(regPart.test(b.name)){
                    code = b.areaCode;
                    return false;
                }
                return true;
            })
        }
        res.send({
            code:'10000',
            data:code
        });
    })
});
router.get('/data/flush',  function(req, res, next) {
    useData.getAreaData(req , res , function(a){
        res.sendSuccess(a);
    })
});
exports.router = router;
exports.__path = '/city';