var express = require('express');
var router = express.Router();
router.get('/merchant', function(req, res, next) {
    var supplierId = req.query.supplierId;
    var token = req.query.token;
    var userId = req.query.userId;
    useRequest.send(req , res , {
        url:useUrl.merchant.info,
        tokenInfo:[userId,token].join('_'),
        data:{
            supplierId:supplierId,
        },
        done:function(data){
            var resData = {code:1};
            if( data && data.code === '10000'){
                resData.code = '10000';
                resData.title = data.result.supplierName;
                resData.filePath = data.result.headFile;
                resData.comment = data.result.companyProfile;
                resData.link = useCommon.addUrlParam(useConfig.get('seatUrl') + '/merchant/detail',{
                    merchantId:supplierId,
                });
                resData.result = {
                    title:data.result.supplierName,
                    filePath:data.result.headFile,
                    comment:data.result.companyProfile,
                    autoComment:data.result.companyProfile,
                    link:useCommon.addUrlParam(useConfig.get('seatUrl') + '/merchant/detail',{
                        merchantId:supplierId,
                    }),
                };
            }
            res.send(resData);
        }
    });
});
exports.router = router;
exports.__path = '/share';