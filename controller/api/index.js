var express = require('express');
var router = express.Router();
router.post('/file/upload', function(req, res, next) {
    req.pipe(useRequest.request(useConfig.get('h5Url')+req.url)).pipe(res);
});
router.post('/file/uploads', function(req, res, next) {
    req.pipe(useRequest.request(useConfig.get('h5Url')+req.url)).pipe(res);
});
var htmlUrl;
router.get('/api/html', function(req, res, next) {
    htmlUrl = req.query.host;
    res.send('静态资源路径统一跳转为'+htmlUrl);
});
router.get('*.*', function(req, res, next) {
    if(req.query.port){
        req.pipe(useRequest.request(useConfig.get('host')+(':'+req.query.port)+req.url)).pipe(res);
    }
    else req.pipe(useRequest.request((htmlUrl || useConfig.get('htmlUrl')) + req.url)).pipe(res);
});
router.get('*', function(req, res, next) {
    if(req.query.port){
        req.pipe(useRequest.request(useConfig.get('host')+(':'+req.query.port)+req.url)).pipe(res);
        return;
    }
    if(htmlUrl){
        req.pipe(useRequest.request(htmlUrl + req.url)).pipe(res);
        return ;
    }
    useRequest.send(req , res , {
        url:useConfig.get('apiUrl') + req.url,
        tokenInfo:req.headers.tokeninfo,
        done:function(a){
            res.send(a);
        }
    });
});
router.post('*', function(req, res, next) {
    if(req.body.port){
        req.pipe(useRequest.request(useConfig.get('host')+(':'+req.body.port)+req.url)).pipe(res);
        return ;
    }
    if(htmlUrl){
        req.pipe(useRequest.request(htmlUrl + req.url)).pipe(res);
        return ;
    }
    var options = {
        url:useConfig.get('apiUrl')+req.url,
        method:'POST',
        tokenInfo:req.headers.tokeninfo,
        done:function(a){
            res.send(a);
        }
    };
    var body = req.body;
    if(req.headers['content-type'] && req.headers['content-type'].indexOf('application/json') > -1){
        options.data = body;
    }
    else if(body.body){
        options.data = body.body;
        delete body.body;
        options.url = useCommon.addUrlParam(options.url,body);
    }else{
        options.data = body;
        options.notBody = 1;
    }
    useRequest.send(req , res , options);
});
exports.router = router;
exports.__path = '/';