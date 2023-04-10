const mysql = require('mysql2');
const express = require('express');
const conn = require('../DataBase/conect_db')

const app = express();

class Teste{
    
    getConnectionDb(){
        app.get('/testedb', (req, res)=>{
            if(conn){
                req.statusCode(200).send('Conectado');
            }else{
                req.statusCode(200).send('Desconectado');
            }
        });
    }
}
// não está funcionando;
module.exports = Teste;
