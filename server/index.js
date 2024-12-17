// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.method==='GET' && req.url==='/'){
//         res.writeHead(200,{'content-type':"text/plain"})
//         res.end("Hello everyone")
//     }
//     else{
//         res.writeHead(404,{'content-type':"text/plain"})
//         res.end("Not Found");
//     }
// });

    
// server.listen(8000,()=>{
//     console.log("Server is running on http://localhost:8000")
// })

// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/",(req,res)=>{
//     res.send("Hello express users");
// })
// app.listen(PORT,()=>{
//     console.log(`Express server is running on http://localhost:${PORT}`);
// })

// const express = require("express");
// import express from 'express'
// const app = express();
// const PORT = 3000;

// app.get("/menu",(req,res)=>{
//     res.sendFile(__dirname+"/views/index.html");
// })
// app.use(express.static(__dirname + '/views'));

// // app.get("/menu",(req,res)=>{
// //     res.sendFile(__dirname+"/views/index.html");
// // })

// app.listen(PORT,()=>{
//     console.log(`Express server is running on http://localhost:${PORT}`);
// })


// New es6 format code

// import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const app= express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const port = 8000;

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','index.html'));
// })
// app.use(express.static(path.join(__dirname,'views')))

// app.listen(port,()=>{
//     console.log(`Server is running on http://localhost:${port}`)
// })

// import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import dotenv from 'dotenv'

// dotenv.config();

// const app= express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const port = process.env.PORT

// // app.get("/",(req,res)=>{
// //     // res.sendFile(path.join(__dirname,'views','index.html'));
// // })

// app.use((req,res,next)=>{
//     const secretCode = req.query.secret;
//     if(secretCode='1234'){
//         req.isAuthorized=true;
//     }
//     else{
//         req.isAuthorized=false;
//     }
//   next(); 
// })

// app.get("/",()=>{
//     if(req.isAuthorized){
//         res.sendFile((path.join(__dirname,'views','index.html')))
//     }
//     else{
//         res.send("Unauthorized")
//     }})

// app.use(express.static(path.join(__dirname,'views')))

// app.listen(port,()=>{
//     console.log(`Server is running on http://localhost:${port}`)
// })



// import express from 'express';
// import path from 'path';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);

// const app =express();
// app.use(express.json());

// dotenv.config();
// const port=process.env.Port;


// app.use(function num(req,res,next){
// const secretcode=req.query.secret;

// if(secretcode==='1234')
// {
//     req.isAuthorized=true;
// }
// else
// {
//     req.isAuthorized=false;
// }
// next();
// });

// app.get("/",(req,res)=>{
//    if (req.isAuthorized)
//    {
//     res.sendFile(path.join(__dirname,"views","index.html"));
//    }
//    else
//    {
//     res.send("Unauthorized");
//    }
// })

// //****************************************************************** 
// app.listen(port,()=>{
//     console.log(`Server is running on http://localhost:${port}`);
// })

import express from "express";
import bodyParser from "body-parser";
// import path from "path";
// import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
import Trainer from "./models/trainersModels.js"
const app=express();
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URL;
console.log(URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect(URL, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("DB connected Successfully");
    app.listen(PORT,()=>{
        console.log("Listening at port http://localhost:${PORT}");
    });
})
.catch((err)=>{console.error("Connection failed:",err)});

async function createTrainer(){
    const trainer = new Trainer({
        name:"Aayush",
        email:"aayushborkar@gmail.com",
        password:"123321",
        age:20
    })
    const result= await trainer.save();
    console.log("User created :",result);

}

createTrainer();
// app.use(express.static('views'));

// const __filename=fileURLToPath(import.meta.url);
// const _dirname=path.dirname(_filename);r