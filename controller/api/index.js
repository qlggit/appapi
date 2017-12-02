var express = require('express');
var router = express.Router();
router.post('/file/upload', function(req, res, next) {
    req.pipe(useRequest.request(useConfig.get('h5Url')+req.url)).pipe(res);
});
router.post('/file/uploads', function(req, res, next) {
    req.pipe(useRequest.request(useConfig.get('h5Url')+req.url)).pipe(res);
});
router.get('*.*', function(req, res, next) {
    req.pipe(useRequest.request(useConfig.get('apiUrl')+req.url)).pipe(res);
});
router.get('*', function(req, res, next) {
    useRequest.send(req , res , {
        url:useConfig.get('apiUrl')+req.url,
        done:function(a){
            res.send(a);
        }
    });
});
router.post('*', function(req, res, next) {
    var options = {
        url:useConfig.get('apiUrl')+req.url,
        method:'POST',
        done:function(a){
            res.send(a);
        }
    };
    var body = req.body;
    console.log(req.headers);
    console.log(body);
    if(body.body){
        options.data = body.body;
    }else{
        options.data = body;
        options.notBody = 1;
    }
    useRequest.send(req , res , options);
});
exports.router = router;
exports.__path = '/';