const mysql = require('mysql2');
const express = require('express');
const app = express()
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Danidani',
    database: 'crud_studo'
})
conn.connect((err)=>{
    if (err)throw err;
    console.log('Conexão com o banco estabelecida')});

module.exports = conn;