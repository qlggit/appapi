var cmd = require('node-cmd');
for(var i = 1; i < 11;i++){
    cmd.run(
        'telnet 192.168.1.'+i+':22'
    );
}
