const cump=require('./func.js')//importando o arquivo 
const fs=require("fs");//importando
console.log("Executando com o node JS")

console.log(cump("NATAN"))

//executando a leitura de um arquivo utilizando o modulo importado
fs.readFile("ArquivoTextoTeste.txt","utf-8",(err,data)=>{
    if(err){
        console.err("Erro ao tentar ler o arquivo "+err)
        return;
    }
    console.log(data);
}) //Vai ler o arquivo


fs.writeFile("ArquivoTextoAutomatico.txt","Texto escrito utilizando o node.js",err=>{
    if(err){
        console.err("Erro ao tentar escrever no arquivo "+err)
        return;
    }
    console.log("Arquivo gerado com sucesso")
})
//fs.appendFile -> adiciona um conteudo a um arquivo existente
//fs.unlink ->remove/exclui um arquivo existente
//fs.rename -> renomear arquivo existente
const filePath=path.join(__dirname,'ArquivoTextoTeste.txt')//mostra o caminho do arquivo
console.log(filePath)
const absolutePath= path.resolve('ArquivoTextoTeste.txt')
console.log(absulutePatch)
console.log("Plataforma:"+os.plataform())
console.log("CPUS"+os.cpus())
console.log("Tempo ligado: "+os.uptime())