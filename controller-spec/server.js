var express = require('express');
var router = express.Router();
router.get('/*',  function(req, res, next) {
    req.pipe(useRequest.request(useConfig.get('h5Url')+(req.baseUrl+req.url))).pipe(res);
});
router.post('/*',  function(req, res, next) {
    useRequest.send(req , res , {
        url:useConfig.get('h5Url')+(req.baseUrl+req.url),
        data:req.body,
        method:'POST',
        done:function(a){
            res.send(a);
        }
    });
});
exports.router = router;
exports.__path = '/server';