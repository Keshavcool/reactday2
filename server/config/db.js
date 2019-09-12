const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'day2'
});

conn.connect(()=>{
    console.log("connected to the database");
});

module.exports = conn;