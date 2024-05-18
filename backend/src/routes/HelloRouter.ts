import express, {Request, Response} from 'express';

import {HelloController} from "@/controller/HelloController";
import { LogInfo } from '@/utils/logger';

// Router from express

let helloRouter = express.Router();

helloRouter.route('/')

    // GET 
    .get(async(req:Request, res:Response)=>{

        // Obtain a Query Param
        let name:any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);

        //Controller Instance to execute method
        const controller: HelloController = new HelloController();

        //Obtain response
        const response = await controller.getMessage(name);

        // Send response

        return res.send(response);
    })


    export default helloRouter;