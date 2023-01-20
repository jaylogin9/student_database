import React,{ useState} from 'react' ;
import { Link, useNavigate} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

// use for navigation.
const AddEdit = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState('');
  const Navigate= useNavigate(); 
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name || !email || !contact){
      toast.error("Please provide value into each input field");
    } else {
      axios.post("http://localhost:8000/api/post",{
        Name:name,
        Email:email,
        Contact:contact,
      });
      toast.success("Data Insert Successfully!");
    setTimeout(()=>Navigate("/"),500);
    }
  };
  return (
    
    <div style={{marginTop: "100px"}}>
      <h2> Insert </h2>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
      onSubmit={handleSubmit}
     >
      
       <label for="name">Name</label>
       <input
       type="text"
       id="name"
       name="Name"
       placeholder="Your Name "
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />

       <label for="email">Email</label>
       <input
       type="email"
       id="email"
       name="Email"
       placeholder="Your Email "
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       />

      <label for="contact">Contact</label>
       <input
       type="number"
       id="contact"
       name="contact"
       placeholder="Phone No. "
       value={contact}
       onChange={(e)=>setContact(e.target.value)}
       />

       
       <input type="submit" value="submit"/>
       <Link to="/">
        <input type="button" id="button" value="Go back"/>
       </Link>
         </form>
     </div>
  );
};

export default AddEdit;