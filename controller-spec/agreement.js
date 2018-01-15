var express = require('express');
var router = express.Router();
router.get('/:type', function(req, res, next) {
    req.pipe(useRequest.request(useUrl.agreement.auto+req.params.type)).pipe(res);
});
exports.router = router;
exports.__path = '/agreement';
