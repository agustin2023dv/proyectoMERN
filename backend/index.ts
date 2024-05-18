import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app:Express= express();
const port: string | number = process.env.PORT || 8000;



app.listen(port, ()=>{
    console.log('Port {port}')
})