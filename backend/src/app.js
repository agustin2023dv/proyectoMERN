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

// Mounting restaurant routes for '/api/restaurants'.
// I tell Express to use the routes defined in there for any request to api/restaurant
app.use('/api/restaurants', require('./routes/restaurants'));
module.exports = app;