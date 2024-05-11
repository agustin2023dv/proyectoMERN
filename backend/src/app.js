const express = require('express')
const cors = require('cors')
const app = express();


// configuration

app.set('port',process.env.PORT || 4000);

//middlewares

app.use(cors());
app.use(express.json());

//routes

app.get('/',(req,res)=>{
    res.send("WELCOME");
})


module.exports = app;