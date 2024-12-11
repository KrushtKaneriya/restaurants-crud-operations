const http = require('http');


const server = http.createServer((req, res) => {
    if(req.method==='GET'&&req.url==='/krushit'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello Everyone!!!");
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Not Found");
    }
})

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})