import express from 'express';
import Connection from './database/connectDb.js';
import DefaultData from './default_Product.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT ||  8080;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);
Connection();

app.listen(port,()=>console.log(`You are Listening to ${port}`));

DefaultData();


