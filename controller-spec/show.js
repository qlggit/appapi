var express = require('express');
var router = express.Router();
router.get('/video', function(req, res, next) {
    res.redirect(useCommon.addUrlParam(useUrl.show.video,req.query));
});
exports.router = router;
exports.__path = '/show';
