//Revisão de javascript;
-Linguagem alto nivel e interpretada;
-Tipagem fraca;
-Tipagem dinamica: uma vez que tem  esse tipo é possivel alterar o tipo;

2- Escopos de variaveis;
 -var é global, podemos redeclarar,pode atualizar a variavel com outro valor;
 -let só é visualizada dentro do escopo, não podemos redeclarar, pode atualizar a variavel com outro valor;
 -const escopo local, não podemos redeclarar, não pode atualizar o valor da variavel, e é necessário ser iniciada com um valor;

3-Dados primitivo;
-nulo: A variavel recbeu o nulo;
-undefined: a variavel foi criada mas nao foi atribuido valor;

4-Conversão de tipos;
- "5'+5= "55"/"O numero é:"+5= "O numeroé 5";

5-Comparador;

-  5=="5" true;
-  5==="5" false;

6-Controle de excessões;
 try e catch
 -try codigo com possibilidade de erro;
 -catch tratamento de erro;
 -finally sempre  executa;

7-função
 - cada função tem sua finalidade;
 - declarada: funct soma (x,y){ return x+y;}
 - arrow function: soma= (x,y)=>{ return x+y;}
 -parametro: são variaveis nomeadas;
 -argumento: é o valor do parametro;

 -closure= acessar uma variavel de outro escopo na função;
 -função de alta ordem: recebe outra função ou retorna uma função;
 - use padrões;
 -rest parametros, onde podemos passar muitos parametros como argumento sem definir o numero de parametros;

 8-Callbacks;
 -funçãopassadas como argumentos para outras função;
 -quando a tarefa assincrona é concluida o callback é chamado para processar o resultado;
 ex: fs.readFile('arquivo.txt','utf8',callback);
 -problemas com call back callback hell ou pyramid of doom;

9-Operação assincronas;
 - bloqueio: impendem a execuçãode qualquer outro codigo até que seja concluido, isso pode ser ruim para o funcionario, ex leitura de arquivo sincrona em um servidor node bloqueia o loop de eventos atrasando o processamento de qualquer outra requisição;
 - não bloqueio permite que outras tarefas possam ser processadas aomesmo tempo;
10-Assincrono:
 -ex: buscar dados de uma Api sem interromper a interação do usuario com a pagina;

11-Promises
 - Valores que podem estar disponiveis, adora, depois ou nunca;
 -pedente;
 -cumprida;
 -rejeitada
 -then, catch,finally;
 -then quando a promise é cumprida;
 catch caso de uma falha;
 -finally sempre executa;

 fetch("http://api.com/dados)
 .then(response => response.json())
 .then(data=>console.log(data))
 .catch(error=> console.error("Erro na requisição:"+ error ))
 .finally(()=> console.log("Requisição concluida))

 -vantagens das promisses sobre callbacks, evita o callhell;

 12-Async /Await
 //funcao assincrona colocamos a palavra Async;
 //await é usada para esperar por uma promise ser resolvida ou rejeitada só poder ser usado dentro do async;

13-Protocolo HTTP;
 -Navegar em arquivos html;
 -cliente servidor;
 -stateless: nao grava as requisições;
 -requisição(cliente)  resposta(servidor);
 -linha de requisição, cabeçalho opcional, corpo a mensagem;
 -POST,GET,PUT,DELETE;
 