var express = require('express');
var router = express.Router();
router.get('/spread', function(req, res, next) {
    var all = [];
    var products = [];
    [2,4].forEach(function(goodsTypeId){
        all.push(new Promise(function(rev){
            useRequest.send(req , res , {
                url:useUrl.product.list,
                data:{
                    goodsTypeId:goodsTypeId,
                    supplierId:req.query.supplierId,
                    pageNum:1,
                    pageSize:20,
                    status:'up',
                },
                done:function(a){
                    products = products.concat(a.result.list);
                    rev();
                }
            })
        }))
    });
    Promise.all(all).then(function(){
        res.sendSuccess(products)
    });
});
exports.router = router;
exports.__path = '/product';