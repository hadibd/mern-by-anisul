const http = require('http');
const host = '127.0.0.1'
const port = '3000'

//* Ceating the server 

// const server = http.createServer((req, res)=>{
//     res.end('<h1>Server is running </h1>');
// });

// const server = http.createServer((req, res)=>{
//     res.writeHead('202', {'content-type' : 'text/plain'});
//     res.write('Hello World');
//     res.end();
    
// });

const server = http.createServer((req, res)=>{
    res.writeHead('200', {'content-type' : 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
    
});

//* Lesting the server 

server.listen(3000, ()=>{
    console.log(`Server is running on https://${host}:${port}`);
})