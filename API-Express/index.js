const express = require('express');
const ClientRoute = require('./Routes/routes');
const conn = require('./DataBase/conect_db');
const Teste = require('./Teste-API/test_API_conn_db');
const Queries = require('./DataBase/getQueries')
const postQueries = require('./DataBase/postQueries')
const app = express();
const port = 3000;

const testedb = new Teste();
testedb.getConnectionDb;
const getqueries = new Queries();
const postqueries = new postQueries('Pedro', 'teste', 'parnamirim',131313);


app.use('/', getqueries.router);
app.use('/', postqueries.router);
app.get('/', (req, res)=>{
    const sql = 'SELECT * FROM cliente_tb;';
    console.dir(req.hostname);
    conn.query(sql,(err, rows)=>{
        if(err){
            console.error('erro '+err.stack);
            return res.status(500).send('Erro ao buscar o usuario');
        }
        res.json(rows);
    });
});
app.use('/', new ClientRoute().router);
app.listen(port, ()=>{
    console.log(`Rodando ${port}`);
});
// Verificar a api http://localhost:3000/
