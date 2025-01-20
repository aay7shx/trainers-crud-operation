import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
const Trainer=()=>{
    
    const [trainers,setTrainers]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(`http://localhost:3000/api/all`);
                toast.success("Trainer data fetched successfully.");    
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

    const deleteTrainer=async(trainerId)=>{
        try{
            await axios.delete(`http://localhost:3000/api/delete/${trainerId}`);
            setTrainers((prevTrainers)=>prevTrainers.filter((trainer)=>trainer._id!==trainerId));
            toast.success("Trainer deleted successfully.");
        }catch(error){
            toast.error("Failed to delete the trainer.");
        }

    };

    return(
        <div className="p-2 card card-shadow">
            <div className="p-2">
                <h1>Trainer List</h1>
                <Link className="btn btn-dark" to={'/add'}>Add Trainer</Link>
            </div>
            <table className="table table-light table-striped-columns">
                <thead className="table-dark">
                    <tr>
                        <th>S.No.</th>
                        <th>Trainer Name</th>
                        <th>Trainer Email</th>
                        <th>Age</th>
                        <th>Actions</th>
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
                            <td>
                                <button className="btn btn-danger me-2" onClick={()=>deleteTrainer(trainer._id)}>Delete</button>
                                <Link className="btn btn-primary" to={`/edit/${trainer._id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default Trainer;