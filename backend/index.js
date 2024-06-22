import express, { response } from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {Book} from './models/bookModels.js'
// Load environment variables from the .env file
dotenv.config();

const PORT = process.env.PORT;
const mongoDBURL= process.env.mongoDBURL;
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';

const app= express();


//Middleware for parsing req body 
app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome To MERN Stack Tutorial');
});


app.use('/books',booksRoute);


mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('App connected to DB');
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})