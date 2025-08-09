//creating a basic server
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'plain/text'});
    res.end("hello world");
});
server.listen(3001,()=>{
    console.log("running the http://localhost:3001");
});
