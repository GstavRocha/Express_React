const express = require('express');
const conn = require('../DataBase/conect_db');

class ClientRoute{
    constructor(){
        this.router = express.Router();
        this.router.get('/testeConection', this.getAllClientes);
    }
    getAllClientes(req, res){
        const sql = 'SELECT nome, sobrenome FROM cliente_tb';
        conn.query(sql, (err, rows)=>{
            console.log('sucess Todos os Usuarios');
            if(err){
                console.error('error'+err.stack);
                return res.status(500).send('Erro ao buscar o usuario');
            }
            res.json(rows);
        });
    }
}
module.exports = ClientRoute;
