//Enviromental variables
import dotenv from 'dotenv';

import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';


const port = process.env.PORT || 8000;

//* Execute server

server.listen(port,() =>{
    LogSuccess(`[SERVER ON]:Running in http://localhost:${port}/api`);
})

// * Control SERVER ERROR

server.on('error',(error)=>{
    LogError(`[SERVER ERROR]:${error}`);
})


// * Config of .env file
dotenv.config();