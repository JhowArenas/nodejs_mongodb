//	Inicializa nodeproject -> npm init

//	Instala pacote -> npm install *nome do pacote* --save 
		//Obs.: --save indica que projeto depende do pacote


//	Inserir um -> insertOne (infos, opções)
		var infos = { infoName : "Info", infoName2 : "Info2" };

//	Inserir varios -> insertMany (infos, opções)
		var infos = [{ infoName : "Info", infoName2 : "Info2" }, { infoName : "Info", infoName2 : "Info2" }]
      
// 	Atualiza um -> updateOne (filtro, alteração, opções)
//	Atualiza varios -> updateMany (filtro, alteração, opções)
		var alteração = { $set{ variavel1 : "info", variavel2 : "infoAlterada"} };
		var filtro = { variavel1 : "info" };

//	Deleta um -> deleteOne (filtro, opções)
//	Deleta varios -> deleteMany (filtro, opções)
		var filtro = { nomeFiltro : "conteudoFiltro" };
		
//	Listar dados -> 
		db.collection("sua collection").find(filtro).toArray(function (erro, documentos){});
		var filtro = { };
		
//	Organizar dados listados ->
	        documentos.forEach(function(doc){                
				console.log("Nome: " + doc.nome);
				console.log("Senha: " + doc.senha);
				if(doc.ativo == true)
                    console.log("Status: Usuario Ativo");
				else
                    console.log("Status: Usuario Inativo");
				console.log("-----------------") 
            });