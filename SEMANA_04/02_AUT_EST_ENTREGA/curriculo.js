const express = require('express');
const app = express();

const port = 5000;
app.use(express.static("public"));

var sqlite3 = require('sqlite3').verbose();
var DBPATH = 'teste.db';
var db = new sqlite3.Database(DBPATH);

//Candidato.

app.get("/c", function(req,res) 
{

    res.header("Access-Control-Allow-Origin", "*"); 

    var sql = `SELECT * FROM candidato WHERE id_candidato = 1`; 
    db.all(sql, [],  (err, rows) => { 
        if (err) { 
            throw err;
        }
        res.send(JSON.stringify(rows)); 
    });
});

//Expeêriencia.

app.get("/e", function(req,res) 
{
    res.header("Access-Control-Allow-Origin", "*"); 

    var sql = `SELECT * FROM experiência WHERE id_experiência = 1`;
    db.all(sql, [],  (err, rows) => { 
        if (err) { 
            throw err;
        }
        res.send(JSON.stringify(rows)); 
    });
});

//Formação.

app.get("/f", function(req,res)
{
    res.header("Access-Control-Allow-Origin", "*");

    var sql = `SELECT * FROM formação WHERE id_formação = 1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(JSON.stringify(rows));
    });
});

//Habilidades.

app.get("/h", function(req,res)
{
    res.header("Access-Control-Allow-Origin", "*");

    var sql = `SELECT * FROM habilidades WHERE id_habilidade = 1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(JSON.stringify(rows));
    });
});

//Realizações.

app.get("/r", function(req,res)
{
    res.header("Access-Control-Allow-Origin", "*");

    var sql = `SELECT * FROM realizações WHERE id_realizações = 1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(JSON.stringify(rows));
    });
});

app.listen(port, () => {
    console.log(`Server listing on ${port}`);
});

    