const http=require('http');
const server=http.createServer((req,res)=>{
 res.statusCode=200;
 //res.setHeader('Content-Type','text/plain');
 res.end('<html><head><title>Servidor ok </title </head> <body><h1>Ola mundo servidor rodando</h1></body></html>')
})
server.listen(3000,'127.0.0.1',()=>{
    console.log("Servidor rodando no IP: 127.0.0.1  e na porta 3000!")
})