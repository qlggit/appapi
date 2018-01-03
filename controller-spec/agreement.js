var express = require('express');
var router = express.Router();
router.get('/member', function(req, res, next) {
    req.pipe(useRequest.request(useUrl.agreement.member)).pipe(res);
});
exports.router = router;
exports.__path = '/agreement';
