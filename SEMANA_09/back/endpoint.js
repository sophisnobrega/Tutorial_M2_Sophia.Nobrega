const express = require('express');
const sqlite3 = require('sqlite3').verbose();  
const DBPATH = 'ojogo.db';
const app = express();
const port = 9000;
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

//chamada post do nome do usuario e geração do id dele e buscar player
app.post('/inserir-nome', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
	const insert = 'INSERT INTO player (nome) VALUES (?) ';
	db.run(insert, [req.body.nome], (err) => {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: 'Vish, não rolou não' });
		} else {
		res.status(201).json({ message: 'Dentro' });
		}
	});
});
//chamada get do id do jogador adversario 
app.get('/players', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
    var id = `SELECT id FROM player WHERE nome = ${insert}`;
	const get3 = `SELECT id FROM player WHERE id != ${id}`;
	db.all(get3, [], (err, rows) => { 
		if (err) {
			console.error(err.message);
		}
		res.json(rows);
	});
});

