var request =require('request');
module.exports = {
    send:function(req, res , options ){
        var sendData = options.data;
        if(typeof sendData !== 'object'){
          if(sendData){
              sendData = JSON.parse(options.data);
          }else{
              sendData = {}
          }
        }else{
          sendData = Object.assign({} , options.data);
        }
        sendData.ip = req.remoteAddress;
        var method = options.method || 'GET';
        var headers = options.headers || {};
        headers.tokenInfo = options.tokenInfo || (req.headers && req.headers.tokeninfo) || '';
        var __ = {
            url:options.url,
            method:method.toUpperCase(),
            headers:headers
        };
        if(method.toUpperCase() === 'POST' && !options.notBody){
                __.body = useCommon.stringify(sendData);
                __.headers["content-type"] =  "application/json";
        }else{
            __.url = useCommon.addUrlParam(__.url ,sendData);
        }
        console.log('request start : ');
        console.log(__);
        request(__ , function(err , response , body){
            try{
                body = JSON.parse(body);
            }catch(e){
            }
            console.log('request end : ' + __.url);
            if(!body ||  body.code - 0!== 10000)console.log(body);
            options.done(body || {code:1,message:'系统繁忙'});
        });
    },
    request : request
};
