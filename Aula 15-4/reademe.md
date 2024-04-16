 1- Protocolo HTTP e metódos
  -Protocolo: um padrão de comunicação;
  -Protocolo HTTP é utilizado para transferir dados na WEB;
  -Principal objetivo do HTTP é permitir recebimento de paginas HTML e outros conteúdos, possibilitando navegação na web;
  -Modelo cliente-Servidor, cliente faz a requisição e o servidor responde;
  -Comunicação  Requeste e Response;
  -statless, não guarda as requisições do cliente antigas;
2-Estrutura básica de comunicação HTTP;
  -linhas de requisições, cabeçalho e opcionalmente, o corpo da mensagem;
3-Componontes de resposta;
  -linha de status, cabeçalho e opcionalmente o corpo da mensagem;
4-Linha de requisição:
  -metódo HTTP + URI + versão do protocolo HTTP;
    get/xpto.com.br/2.0
    metódo, URI, versão do protocolo
5-Headers fornece informaçõpes adicionais sobre o requestou sobre o cliente ao servidor;

6-Request Body: 
   -POST e PUT para enviar dados ao servidor, ex> dados de formulario, upload de arquivos;

7-Metódos HTTP:
  -Operações que o cliente deseja realizar;
  -GET: navegar em pagina, buscar imagens, dados de formulario e leitura etc.
  -POST: enviar dados,formularios, uploadde arquivos;
  -PUT: Substituitodas as representações atuais do recurso de destino com dados do request, atualizar.
  -DELETE:Remove um recurso especifico;
  -HEAD:recuperação de metadados;
  -OPTIONS: determinar quais metódos HTTP e outras opções são suportados por um servidor;
  -PATCH:modificação parcial de recursos, atualiza partes de um recurso sem enviar o recurso completo;
8-CRUD;

9-Resposta;
 -versão do protocolo seguida por status numerico e uma mensagem textual de razão;
 -status exemplos; 200(sucesso na resposta), 404(erro servidor nao encontrou o recurso), 500(não conseguiu exibir)
 -Hearders na response: informações adicionais sobre a resposta;
 
