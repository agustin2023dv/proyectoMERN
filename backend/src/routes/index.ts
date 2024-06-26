/*
Root router
Redirection to Routers
*/ 


import express, {Request, Response} from 'express';

import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';


let server = express();


let rootRouter= express.Router();

// Activate for requests to http://localhost:8000/api


// GET: http://localhost:8000/api
rootRouter.get('/',(req:Request, res:Response)=>{

  LogInfo('GET: http://localhost:8000/api/')

    // Send response

    return res.send('Holis');
})


// Redirections to Routers && Controllers
server.use('/',rootRouter); //http://localhost:8000/api
server.use('/hello',helloRouter) //http://localhost:8000/api/hello --->HelloRouter

// Add more routes to the app
export default server;