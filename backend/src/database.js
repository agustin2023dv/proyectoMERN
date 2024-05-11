const mongoose = require('mongoose');

// connection string

const URI = process.env.MONGODB_URI ||'mongodb://localhost/dbtest';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("DB connected: ", URI);
})