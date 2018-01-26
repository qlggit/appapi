//admin 1234yqs_admin
module.exports = {
    h5Url:'http://h5.yukew.com',
    seatUrl:'http://wx.yukew.com',
    apiUrl:'http://172.19.56.132:4200',
    host:'http://172.19.56.132',
    htmlUrl:'http://172.19.56.132:4200',
    "log4js":{
        "customBaseDir" :"../logs/appapi/",
        "customDefaultAtt" :{
            "type": "dateFile",
            "absolute": true,
            "alwaysIncludePattern": true
        },
        "appenders": [
            {"type": "console", "category": "console"},
            {"pattern": "debug/yyyyMMdd.log", "category": "logDebug"},
            {"pattern": "info/yyyyMMdd.log", "category": "logInfo"},
            {"pattern": "warn/yyyyMMdd.log", "category": "logWarn"},
            {"pattern": "err/yyyyMMdd.log", "category": "logErr"}
        ],
        "replaceConsole": true,
        "allConsole":true,
        "levels":{ "logDebug": "DEBUG", "logInfo": "DEBUG", "logWarn": "DEBUG", "logErr": "DEBUG"}
    }
};

