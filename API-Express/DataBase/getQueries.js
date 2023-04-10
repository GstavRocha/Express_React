const express = require('express');
const conn = require('../DataBase/conect_db');

class GetQueries {
    constructor(){
        this.router = express.Router();
        this.router.get('/nome', this.getNomeDb);
        this.router.get('/sobrenome', this.getSobreNomeDb);
        this.router.get('/cidade', this.getCidadeDb);
        this.router.get('/inscricao', this.getInscricaoDb);
    }
    getNomeDb(req, res){
        const sql = 'SELECT nome FROM cliente_tb;';
        conn.query(sql, (err, result)=>{
            console.log('sucess nome User Db');
            if(err){
                console.error('error'+err.stack);
            }else{
                return res.json(result);
            }
        });
    };
    getSobreNomeDb(req, res){
        const sql =' SELECT sobrenome from cliente_tb;';
        conn.query(sql,(err, result)=>{
           console.log('sucess sobrenome User Db');
           if(err){
               console.error('error'+err.stack);
           }else{
               return res.json(result);
           }
        });
    };
    getCidadeDb(req, res){
        const sql = 'SELECT cidade FROM cliente_tb;';
        conn.query(sql,(err,result)=>{
            console.log('sucess cidade User Db');
            if(err){
                console.error('erro'+err.stack);
            }else{
                return res.json(result);
            };
        });
    };
    getInscricaoDb(req,res){
        const sql = 'SELECT inscricao FROM cliente_tb;';
        conn.query(sql,(err, result)=>{
            console.log('success Inscricao User Db');
            if(err){
                console.error('error'+err.stack);
            }else{
                return res.json(result);
            };
        });
    };
}

module.exports = GetQueries;
