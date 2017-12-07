var express = require('express');
var router = express.Router();
router.post('/bind', function(req, res, next) {
    useRequest.send(req , res , {
        url:useConfig.get('apiUrl')+req.url,
        tokenInfo:req.headers.tokeninfo,
        done:function(a){
            res.send(a);
        }
    });
});
router.get('*', function(req, res, next) {
    useRequest.send(req , res , {
        url:useConfig.get('apiUrl')+req.url,
        tokenInfo:req.headers.tokeninfo,
        done:function(a){
            res.send(a);
        }
    });
});
router.post('*', function(req, res, next) {
    var options = {
        url:useConfig.get('apiUrl')+req.url,
        method:'POST',
        tokenInfo:req.headers.tokeninfo,
        done:function(a){
            res.send(a);
        }
    };
    var body = req.body;
    console.log(req.headers);
    console.log(body);
    if(req.headers['content-type'] && req.headers['content-type'].indexOf('application/json') > -1){
        options.data = body;
    }
    else if(body.body){
        options.data = body.body;
    }else{
        options.data = body;
        options.notBody = 1;
    }
    useRequest.send(req , res , options);
});
exports.router = router;
exports.__path = '/login';