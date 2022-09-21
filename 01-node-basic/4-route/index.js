const http = require('http');
const fs = require('fs');
const port = 3000;



const server = http.createServer((req, res)=>{

    const handlePage = (page)=>{
        fs.readFile(`./node-basic/4-route/views/${page}.html`, (err, data) => {
            if(err){
                console.log(err);
            }else{
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
            }
          });
    }
    
    if(req.url==='/'){
        handlePage('home');
    }
    else if(req.url==='/about'){
        handlePage('home');
    }
    else if(req.url==='/contact'){
        handlePage('contact');
    }
    else{
        handlePage('home');
    }
    
})

server.listen(3000, ()=>{
console.log(`server runnin in port: ${port}`);
})