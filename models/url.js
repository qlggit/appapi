var apiUrl = useConfig.get('apiUrl') ;
var h5Url = useConfig.get('h5Url') ;
module.exports = {
    sms:{
        send:h5Url + '/sms/send',
        apiSend:apiUrl + '/api/sms/v_1/send',
    },
    city:{
        patent:apiUrl + '/api/area/v_1/list',
        child:apiUrl + '/api/area/v_1/childList',
    },
    version:{
        check:h5Url + '/server/version/check',
    },
    agreement:{
        auto:h5Url + '/server/agreement/',
    },
    show:{
        video:h5Url + '/server/show/video',
    },
    merchant:{
        info:apiUrl + '/mgr/supplier/v_1/info',
    },
    product:{
        list:apiUrl + '/mgr/goods/v_1/list',
    },
};
