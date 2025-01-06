import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const Trainer=()=>{
    
    const [trainers,setTrainers]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(`http://localhost:3000/api/all`);
                setTrainers(response.data);
            }
            catch(error){
                console.error("Error in fetching the data: ",error);

                    if(error.response?.status===401){
                        toast.error("Unauthorized. Please login again.",{
                            position:'top-right',
                        });
                    }
                    else{
                        toast.error("Failed to fetch the trainer data",{
                            position:'top-right',
                        });
                    }
            }
        };
        fetchData();
    },[]);

    const deleteTrainer=async()=>{
        try{
            const response=await axios.delete(`http://localhost:3000/api/delete/${TrainerId}`);
            toast.success("Trainer deleted successfully!");
        }catch(error){
            toast.error("Failed to delete the trainer.");
        }

    };
    return(
        <div>
            <div>
                <h1>Trainer List</h1>
                <Link to={'/add'}>Add Trainer</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Trainer Name</th>
                        <th>Trainer Email</th>
                        <th>Age</th>
                    </tr>

                </thead>
                <tbody>
                    {trainers.map((trainer,index)=>(
                        <tr key={trainer._id}>
                            <td>{index+1}</td>
                            <td>{trainer.name}</td>
                            <td>{trainer.email}</td>
                            <td>
                                {trainer.age}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default Trainer;