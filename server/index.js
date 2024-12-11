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

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','index.html'));
// })
// app.use(express.static(path.join(__dirname,'views')))

// app.listen(port,()=>{
//     console.log(`Server is running on http://localhost:${port}`)
// })