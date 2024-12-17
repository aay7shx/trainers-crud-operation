import mongoose from 'mongoose'

const trainersSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        }
    },{
        timestamps:true
    }  
)

const Trainer = mongoose.model("trainers",trainersSchema);

export default Trainer;