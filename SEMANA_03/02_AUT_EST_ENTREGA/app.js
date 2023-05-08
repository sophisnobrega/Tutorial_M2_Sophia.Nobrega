const express = require('express'); //pedindo o framework express
const app = express(); // inicializa o express
const bodyParser = require('body-parser'); // pedindo o bodyparser
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // usando o body parser

const hostname = '127.0.0.1'; //parte da 'esquerda' do link
const port = 3031; //env de enviroment; port de porta; porta é a parada que especifica para onde a iformação vai
var sqlite3 = require('sqlite3').verbose(); //pede o sqlite (baixando uma bbloteca)
var DBPATH = 'teste.db'; //caminho do banco de dados
var db = new sqlite3.Database(DBPATH); //inicializa o banco de dados
// post esta inserindo algum dado novo no servidor, put é update, get traz os dados

app.use(bodyParser.json()); // usando o body parser

app.get("/nome", function(req,res) //ele acessa pelo "/nome", que significa que é o caminho do nome, e quando ele identificar que abriu, ele abre uma função que tem uma requisição(req) e uma responta(res)
{
    res.header("Access-Control-Allow-Origin", "*"); //isso é para aceitar qualquer coisa no site que rode js
    var sql = `SELECT nome FROM candidato WHERE id_candidato == 1`; //query sql
    db.all(sql, [],  (err, rows ) => { //abre o banco de dados
        if (err) { //se der erro, printar no console
            throw err;
        }
        res.send(JSON.stringify(rows)); //mandando a query e recebendo a resposta
    });
    db.close(); //fechando o banco de dados
});
//tudo isso em cima é um endpoint - um endpoint é um endereço para um servidor que acessa o banco de dados e responde na pagina

app.post('/insert', urlencodedParser,  function(req,res) {
    res.header('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    const sql = "INSERT INTO candidato (nome, cargo) VALUES ('" + req.body.nome + "', '" + req.body.cargo + "')"; //Query sql
    db.all(sql, [],  err => {// abre o banco de dados
        if (err) { //para caso de um erro
            throw err;
        }
    });
    res.status(200).send('Candidato inserido com sucesso!'); //resposta de que deu certo
    db.close();// fecha o banco de dados
});

app.post('/update', urlencodedParser,  function(req,res) {
    res.header('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    const sql = "UPDATE candidato SET nome = '" + req.body.nome + "' WHERE id_candidato = " + req.body.id; // Query sql
    db.run(sql, [],  err => {//abre o banco de dados
        if (err) {// caso de erro
            throw err;
        }
    });
    res.status(200).send('Updated com sucesso!'); // resposta do servidor
    db.close();//fecha o banco de dados
});

app.post('/delete', urlencodedParser, function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM candidato WHERE id_candidato = " + req.body.id; // Query sql
	db.run(sql, [],  err => { // abre o banco de dados
		if (err) { // caso de algum erro
		    throw err;
		}
	});
	db.close(); // Fecha o banco
    res.status(200).send('Deleted com sucesso!'); // resposta do servidor
});


app.listen(port, hostname, () => //com o listen, mantem o servidor ativo escutando a porta, o parenteses representa a função
{
    console.log(`Server running at http://${hostname}:${port}/`); //console log imprimi no console do servidor e o ${port} permite usar variaveis no meio do texrto
})

