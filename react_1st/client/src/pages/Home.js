import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axios from  "axios";


const Home = (props) => {
  const [data, setData] = useState([]);
   
  const loadData = async()=>{
    const response = await axios.get("http://localhost:8000/api/get");
    setData(response.data);
  };

  useEffect(() =>{
    loadData();
  });

  const deleteContact =(id) =>{
    if(window.confirm("Are you sure to delete this data"));
    axios.delete(`http://localhost:8000/api/remove/${id}`);
    toast.success("Contact deleted Successfully");
    setTimeout(()=>loadData(),500);
  };
  
  return (
    
    <div style={{marginTop: "120px"}}>
    
     <Link to={'/addcontact'}>
           <button className='btn btn-contact'>Add Contact </button>
     </Link>
      
      <table className='styled-table'>
        <thead>
          <tr> 
             <th style={{textAlign: "center"}}>No.</th>
             <th style={{textAlign: "center"}}>Name</th>
             <th style={{textAlign: "center"}}>Email</th>
             <th style={{textAlign: "center"}}>Contact</th>
             <th style={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return (
              <tr key={item.id}>
                <th scope='row'>{index+1}</th>
                <td> {item.Name}</td>
                <td> {item.Email}</td>
                <td> {item.Contact}</td>
                <td>
                    <Link to={`/update/${item.id}`}>
                     <button className='btn btn-edit'>Edit </button>
                    </Link>
                    <button className='btn btn-delete' onClick={()=> deleteContact(item.id)}>Delete </button>
                    <Link to={`/view/${item.id}`} id={item.id}>
                     <button className='btn btn-view'>View </button>
                    </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
