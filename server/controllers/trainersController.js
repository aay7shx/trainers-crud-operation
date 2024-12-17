import Trainer from "../models/trainersModels.js";


export const createTrainer = async (req,res)=>{
    try{
        const userData = new Trainer(req.body);
        if(!userData){
            res.status(404).json({msg:"User not Found"});
        }
        await userData.save();
        res.status(200).json({msg:"User got created successfully"})
    }
    catch(error){
        res.status(500).json({err:error});
    }
}

export const getAll = async (req,res)=>{
    try{
      const userData = await Trainer.find();
      if(!userData){
        res.status(404).json({mes:"User not found"})
      }
      res.status(200).json(userData);
    }
    catch(error){
        res.status(200).json({err:error})
    }
  }

export const getOne = async (req,res)=>{
    try{
        const id = req.params.id;
        const userData = await Trainer.findById(id);
        if(!userData){
            res.status(404).json({msg:"User doesn't exist"});
        }
        res.status(200).json(userData);
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}

export const updateTrainer = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await Trainer.findById(id);
        if(!userExist){
            res.status(404).json({msg:"User does not exist"});
        }
        const updatedData = await Trainer.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg:"User has been updated successfully"})
    }
    catch(error){
        res.status(500).json({err:error});
    }
}

export const deleteTrainer = async(req,res)=>{
    try{
        const id = req.params.id;
        const userData = await Trainer.findById(id);
        if(!userData){
            res.status(404).json({msg:"User does not exist"});
        }
        const deleteData = await Trainer.findByIdAndDelete(id)
        res.status(200).json({msg:"User has been deleted successfully"})
    }
    catch(error){
        res.status(500).json({err:error});
    }
}