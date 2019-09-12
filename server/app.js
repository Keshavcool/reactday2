const express = require('express');
const app = express();
const auth = require('./routes/auth');
require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use('/auth',auth);


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
});