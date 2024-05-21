 //Primeira parte
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.statusCode=200;
//    // res.setHeader('Content-Type','text/plain');
//     if(req.url==='/'){ 
//     res.statusCode=200;
//     res.end("<html><head></head> <body><h1>Seja bem vindo a pagina inicial</h1> <body></html>");
//     }else if(req.url==="/usuarios"){
//         res.statusCode;
//         res.end("Tela de usuarios");
//     }else if(req.url==="/clientes"){
//         res.statusCode;
//         res.end('Bem vindo a tela de clientes')
//     }else if(req.url==="/xpto"){
//         res.statusCode;
//         res.end('Bem vindo ao xpto')
//     }else{
//         res.end("Desculpe nao foi possivel encontrar a pagina")
//     }
// })
// server.listen(3000,'127.0.0.1',()=>{
//     console.log("Servidor rodando no IP: 127.0.0.1  e na porta 3000!")
// })

//segunda parte

const express=require('express')// importando a func express
const app=express();
const porta=3000;
app.set('view engine','ejs'); // mostra que o view engine é ejs
app.use((req,res,next)=>{
    console.log(`${req.method} - ${req.url}`)
    next();
})
app.get('/',(req,res)=>{ // get para fazer uma requisição de puxar
    res.status=200;
    const data={
        titulo:'Pagina inicial', //title que sera imprimido no html index.ejs
        mensagem:'Pagina inicial do sistema XPTO versão 2.0' // h1 a ser imprimido
    }
    const clientes=[
        {name:'dell', cnpj:'sdsdsdsd'},
        {name:'lg',cnjp:'2323232'}
       ]
    res.render('index',data,clientes);
})
app.get("/clientes",(req,res)=>{
    res.status=200;
    res.send('Listagem de clietes');
})


app.get('/fornecedores',(req,res)=>{
    res.status=200;
    res.send('Listagem de fornecedores')
})
app.get('/cadastrocliente',(req,res)=>{
    const data={
        titulo:'cadastro de clientes',
        mensagem:'Insira os dados do cliente'
    }
    res.render('cadastro.ejs',data);
})
app.get('/ 1',(req,res,next)=>{
    console.log('Passou pelo middleware')
    next();

},(req,res)=>{
    res.send('Pagina do Middleware!')
})
app.listen(porta,()=>{
    //res.status=200;
    console.log("Servidor rodando na porta 3000")
})