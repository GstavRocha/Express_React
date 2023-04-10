const User = require('../../ClassUser/User');
const conn = require('../../DataBase/conect_db');
const {json} = require("express");
class Getuser extends User{

    getNomeDb(req, res){
        const sql = 'SELECT nome FROM cliente_tb;';
        conn.query(sql,err, (err, result) =>{
            if(err){
                console.error('Error'+err.stack);
            }
            return json(result)
        });

    }
}
