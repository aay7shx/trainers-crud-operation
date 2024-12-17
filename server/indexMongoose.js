import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./routes/trainersRoutes.js";

dotenv.config();

const app=express();
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URL;
console.log(URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

 mongoose.connect(URL, {useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>{console.log("DB connected successfully");
    app.listen(PORT,()=>{
        console.log(`Listening at port http://localhost:${PORT}`);
    });
  })
  .catch((err)=>{console.error("Connection failed:",err)});

app.use('/api',route);


