import express, {Express, Request, Response} from 'express';


//Security

import cors from 'cors';
import helmet from 'helmet';



// TODO HTTPS
// Root Router
import rootRouter from '../routes';



// * Create Express APP

const server:Express= express();


// Define SERVER to use '/api' and use rootRouter from 'indext.ts' in routes
// From this point on : http://localhost:8000/api/..
server.use(
    '/api',
    rootRouter);

// TODO Mongoose Connection

// * Security config

server.use(helmet());
server.use(cors());

// * Content Type Config

server.use(express.urlencoded({extended:true, limit:'50mb'}));
server.use(express.json({limit:'50mb'}));


// * Redirection config

// http://localhost:8000/ ---> http://localhost:8000/api/

server.get('/',(req:Request, res:Response)=>{
    res.redirect('/api');
})

export default server;