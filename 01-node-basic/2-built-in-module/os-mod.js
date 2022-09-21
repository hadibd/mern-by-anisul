const os = require('os');

console.log('=============cpus ===============');
console.log(os.cpus());
console.log('=============arch ===============');
console.log(os.arch());
console.log('=============end ===============');
console.log(os.endianness());
console.log('=============freename ===============');
console.log(os.freemem());
console.log('=============homedir ===============');
console.log(os.homedir());
console.log('=============host name ===============');
console.log(os.hostname());

console.log('============= load===============');
console.log(os.loadavg());
console.log('=============user ===============');
console.log(os.userInfo);
console.log('=============net ===============');
console.log(os.networkInterfaces());
console.log('============= platform===============');
console.log(os.platform());
console.log('=============version ===============');
console.log(os.version());