const express = require('express');
const conn = require('../DataBase/conect_db');
const User = require('../ClassUser/User')
class postQueries extends User{
    constructor(nome,sobrenome, cidade, inscricao,Adduser, postNome, postSobreNome, postCidade, postInscricao) {
        super(nome, sobrenome, cidade, inscricao);
        this.router = express.Router();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cidade = cidade;
        this.inscricao = inscricao;
        this.router.post(`/${nome}`)
    }
    postAddUser(nome,sobrenome, cidade, inscricao, res, req){
       nome = this.nome;
       sobrenome = this.sobrenome;
       cidade = this.cidade;
       inscricao = this.inscricao;
        const sql = `INSERT INTO cliente_tb(nome, sobrenome, cidade, inscricao) VALUES (${nome},${sobrenome},${cidade},${inscricao})`;
        conn.query(sql,(err,result)=>{
            if(err){
                console.error('erro'+err.stack);
            }else{
                return res.json(result);
            };
        });
    }

}
