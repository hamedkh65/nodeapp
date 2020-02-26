var os = require('os');

var message = 'Here is some info about your system';

var sysarray = new Array('Type: '+os.type(),
                         'Node version: ' + process.version,
                         'Platform :' + os.platform(),
                         'Hostname :' + os.hostname(),
                         'Total memory :' + os.totalmem(),
                         'Free memory :' + os.freemem(),
                         'Uptime :' + os.uptime()
)
console.log(message);

sysarray.forEach(element => {
    console.log(element);
});