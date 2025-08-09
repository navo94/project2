//creating a basic server
/**const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'plain/text'});
    res.end("hello world");
});
server.listen(3001,()=>{
    console.log("running the http://localhost:3001");
});**/


//lets make the server a little more smatter
//by enabling it to handle different reequests through the url
//modifying thr server.js to handle the POST & /signup requests

const http = require('http');
const host='localhost';
const port=3001;
const server=http.createServer((req,res)=>{
    if(req.url=='/signup' && req.method=='POST'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("signup request received");
    }
    else{
        res.writeHead(400,{'Content-Type':'text/plain'});
        res.end('400,error ');
    }
});
server.on('error',(err)=>{
    if(err.code=='EADDRINUSE'){
        console.error(`port ${port} is already in use`);
    }
    else{
        console.error(err);
    }
});
server.listen(port,host,()=>{
    console.log(`server runnong at the http://${host}:${port}`);
});
