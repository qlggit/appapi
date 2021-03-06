var cacheData = {};
module.exports = {
    getAreaData:function(req , res ,call){
        var cache = cacheData.areaData;
        var date = useCommon.parseDate(new Date , 'Ymd');
        if(cache){
            call(cache.data);
            if(cache.date === date){
                return;
            }
        }
        var spec = ['110000','120000','500000','310000'];//直辖市不需要继续查
        useRequest.send(req , res ,{
            url:useUrl.city.patent,
            done:function(data){
                if(data.code === '10000'){
                    var parentData = data.result;
                    parentData = parentData.filter(function(a){
                        //去除港澳台
                        return ['710000','810000','820000'].indexOf(a.areaCode) === -1
                    });
                    var all = [];
                    var childData = [];
                    parentData.forEach(function(a){
                        if(spec.indexOf(a.areaCode) === -1){
                            all.push(new Promise(function(rev , rej){
                                useData.getChildData(req , res , a.areaCode , function(data){
                                    if(data){
                                        childData = childData.concat(data);
                                        rev();
                                    }else rej();
                                });
                            }));
                        }else{
                            childData.push(a);
                        }
                    });
                    Promise.all(all).then(function(){
                        childData.sort(function(a,b){
                           return a.alphabetical > b.alphabetical?1:-1;
                        });
                        cacheData.areaData = {
                            data:childData,
                            date:date,
                        };
                        call && call(childData);
                    }).catch(function(){
                        call && call([]);
                    })
                }
                else{
                    call && call([]);
                }
            }
        })
    },
    getChildData:function(req , res , parentCode ,call){
        useRequest.send(req , res , {
            url:useUrl.city.child,
            data:{
                parentCode:parentCode,
            },
            done:function(o){
                if(o.code === '10000'){
                    call && call(o.result);
                }else call();
            }
        })
    },
    init:function(){
        this.getAreaData({session:{}},{})
    }
};


