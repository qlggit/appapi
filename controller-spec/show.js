var express = require('express');
var router = express.Router();
router.get('/video', function(req, res, next) {
    req.pipe(useRequest.request(useCommon.addUrlParam(useUrl.show.video,req.query))).pipe(res);
});
exports.router = router;
exports.__path = '/show';
