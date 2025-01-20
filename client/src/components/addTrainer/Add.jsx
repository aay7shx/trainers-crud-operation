import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Add=()=>{
    const[trainer,setTrainer]=useState({
        name:"",
        email:"",
        age:"",
        password:""
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setTrainer({...trainer,[name]:value});
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:3000/api/create",trainer);
            toast.success(response.data.msg);
            navigate("/");
        }catch(error){
            toast.error("Trainer not added");
            console.log(error);
        }
    }

    return(
        <div>
            <div>
                <h3>Add Trainer</h3>
                <Link to={"/"}>Back</Link>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Trainer Name:</label>
                        <input type="text" 
                        id="name" 
                        onChange={handleChange} 
                        name="name" 
                        // value={trainer.name}
                        placeholder="Enter your name:" 
                        required/>
                    </div>
                    <div>

                        <label htmlFor="email">Email:</label>
                        <input type="email" 
                        onChange={handleChange} id="email" 
                        
                        name="email" 
                        // value={trainer.email}
                        placeholder='Enter your email:' 
                        required/>
                    </div>
                    <div>

                        <label htmlFor="age">Age:</label>
                        <input type="text"
                        onChange={handleChange}
                        
                        placeholder='Enter your age:' 
                        name='age'
                        // value={trainer.age}
                        required/>
                    </div>
                    
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type="password"
                        onChange={handleChange}
                        
                        name='password'
                        // value={trainer.password}
                        placeholder='Enter Password:'
                        required />
                    </div>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Add;