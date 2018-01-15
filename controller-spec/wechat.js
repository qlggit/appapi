var express = require('express');
var router = express.Router();
router.get('/*',  function(req, res, next) {
    console.log('http://h5.yukew.com'+(req.baseUrl+req.url));
    req.pipe(useRequest.request('http://h5.yukew.com'+(req.baseUrl+req.url))).pipe(res);
});
router.post('/*',  function(req, res, next) {
    useRequest.send(req , res , {
        url:'http://h5.yukew.com'+(req.baseUrl+req.url),
        data:req.body,
        method:'POST',
        done:function(a){
            res.send(a);
        }
    });
});
exports.router = router;
exports.__path = '/wechat';