var express = require('express');
var router = express.Router();
router.get('/check',  function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.version.check,
        data:req.query,
        done:function(a){
            res.send(a);
        }
    });
});
exports.router = router;
exports.__path = '/version';