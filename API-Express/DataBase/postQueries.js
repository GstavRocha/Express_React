const express = require('express');
const conn = require('../DataBase/conect_db');
const User = require('../ClassUser/User')
class postQueries extends User{
    constructor(nome,sobrenome, cidade, inscricao) {
        super(nome, sobrenome, cidade, inscricao);
        this.router = express.Router();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cidade = cidade;
        this.inscricao = inscricao;
        this.router.post(`/adduser`, this.postAddUser);
    }
    postAddUser(nome,sobrenome, cidade, inscricao, res, req){
        nome = req.body.nome;
        sobrenome = req.body.cidade;
        cidade = req.body.sobrenome;
        inscricao = req.body.inscricao;
        conn.connect().then((pool)=>{
            const sql = `INSERT INTO cliente_tb(nome, sobrenome, cidade, inscricao) VALUES (${nome},${sobrenome},${cidade},${inscricao})`;
            pool.query(sql).then((rows)=>{
            })
        })

    }

}
module.exports = postQueries;
