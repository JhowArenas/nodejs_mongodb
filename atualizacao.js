var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/';

MongoClient.connect(servidor, function (erro, client) {
    const db = client.db('testingdb'); // nome do banco

    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else  
        console.log("Conexão estabelecida com sucesso.");

    var colecao = db.collection("clientes");   

    colecao.updateOne({codigo : 1}, {$unset : { pontos : 0}}, function(erro, resultado){
      if(erro)
          console.log("Erro ao atualizar documento: " + erro);
      else    
          console.log("Documento atualizado com sucesso");
    });

    client.close();
});