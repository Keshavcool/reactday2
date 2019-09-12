const router = require('express').Router();
const conn = require('../config/db');

router.post('/register',(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const query = `insert into register(username,name,password) values('${username}','${email}','${password}')`;
    conn.query(query,(err) => {
        if(err) throw err;
        res.send("User Created Successfully");
        res.end();
    });

});

router.post('/login',(req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const query = `select id from register where name='${email}' and password='${password}'`;
    conn.query(query,(err,results) => {
        if(err) throw err;
        if(results.length === 0){
            res.send("Wrong Username");
        }
        else{
            res.send("User Exists");
        }
        res.end();
    });
});


module.exports = router;