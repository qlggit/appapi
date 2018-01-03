var express = require('express');
var router = express.Router();
router.get('/rongloud', function(req, res, next) {
    req.pipe(useRequest.request(useConfig.get('') + req.baseUrl + req.url)).pipe(res);
});
exports.router = router;
exports.__path = '/';