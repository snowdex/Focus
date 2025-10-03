const express = require('express')
require('dotenv').config();
const cors = require('cors');
const api = require('./Routes/routes');
const connect  =require('./database/db');

const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000;
connect()

app.use('/api', api);   

app.listen(port, ()=>{
    console.log("Listening at: http://localhost:"+port );
})