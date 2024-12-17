import {createTrainer,getAll, getOne , updateTrainer ,deleteTrainer} from "../controllers/trainersController.js";
import express from 'express'

const route = express.Router();
route.post("/create",createTrainer);
route.get("/all",getAll)
route.get("/getone/:id",getOne)
route.put("/update/:id",updateTrainer)
route.delete("/delete/:id",deleteTrainer)

export default route;