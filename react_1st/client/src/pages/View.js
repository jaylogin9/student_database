import React,{useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import "./View.css";

const View = () => {
    const [user,setUser] = useState({});
    const {id} = useParams();
    const get_data=async function(){
        let data=await axios.get(`http://localhost:8000/api/get/${id}`)
         setUser({...data.data})
    }
    useEffect(() =>{
     get_data()
    },[]);
  return (
    <div style={{marginTop: "150px"}}>
        <div className='card'>
            <div className='card-header'>
                <p> User Contact Details</p>
            </div>
            <div className='container'>
                <strong> ID:</strong>
                <span> {id}</span>
                <br/>
                <br/>
                <strong> NAME:</strong>
                <span> {user.Name}</span>
                <br/>
                <br/>
                <strong> EMAIL:</strong>
                <span> {user.Email}</span>
                <br/>
                <br/>
                <strong> CONTACT:</strong>
                <span> {user.Contact}</span>
                <br/>
                <br/>
                <Link to="/">
                    <div className='btn btn-edit'> Go Back</div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default View