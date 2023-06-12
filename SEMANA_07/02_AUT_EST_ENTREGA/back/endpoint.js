const express = require('express');
const sqlite3 = require('sqlite3').verbose();  
const DBPATH = 'curriculo.db';
const app = express();
const port = 3000;
const db = new sqlite3.Database((DBPATH), (err) => {
if (err){
	console.error(err.message);
} else{
	console.log('Tudo certo, chefe ;) ');
}});
   
app.use(express.static("../front/"));
app.use(express.json());

//mantem o servidor on fire
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
	});

//CRUD:

//Create
app.post('/inserir-dados', (req, res) => { 
	const insert = 'INSERT INTO informacoes_pessoais (nome, profissao, contato, email) VALUES (?, ?, ?, ?) ';
	db.run(insert, [req.body.nome, req.body.profissao, req.body.contato, req.body.email], (err) => {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: 'Vish, não rolou não' });
		} else {
		res.status(201).json({ message: 'Dentro' });
		}
	});
});

//Read
app.get('/curriculo', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const get3 = "SELECT * FROM infromacoes_pessoais, formacao, experiencia;";
	db.all(get3, [], (err, rows) => { 
		if (err) {
			console.error(err.message);
		}
		res.json(rows);
	});
});

//Update
app.put('/atualizacao-dados', (req, res) => {
	const update = 'UPDATE informacoes_pessoais SET nome = ?, profissao = ?, contato = ?, email = ? ';
	db.run(update, [req.body.tipo_vagao, req.body.placa], (err) => {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: 'Atualizado, chefe' });
		} else {
			res.status(200).json({ message: 'Não foi dessa vez' });
		}
	});	
});

//Delete
app.delete('/deletar-dados', (req, res) => {
	const del = 'DELETE * FROM experiencia, formacao, informacoes_pessoais ';
	db.run(del, [req.body.placa], (err) => {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: 'Se ferrou amigão' });
		} else {
			res.status(200).json({ message: 'Deu certo' });
		}
	});  
});
