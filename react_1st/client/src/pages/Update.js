import React,{ useState,useEffect} from 'react' ;
import { useParams, Link, useNavigate} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

// use for navigation.
const Update = () => {
  const [user, setUser] = useState({
    Name:'',
    Email:'',
    Contact:''
  });
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState('');
  const Navigate= useNavigate(); 
  const {id} = useParams();

  const get_data=async function(){
  let data=await axios.get(`http://localhost:8000/api/get/${id}`)
                 setUser({...data.data})
            }
  useEffect(() =>{ get_data() 
},[]);

 const handleChange = e => {
    console.log(e.target.name)
    const { name, value } = e.target;
    setUser( ({...user, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!user.Name || !user.Email || !user.Contact){
      toast.error("Please provide value into each input field");
    } else {
        console.log(user)
      axios.put(`http://localhost:8000/api/put/${id}`, user)
           .then(response => {
            toast.success("Data Update Successfully!");
            setTimeout(()=>Navigate("/"),500);
           })
           .catch(error => {
            console.log(error);
           })
    }
  };



  return (
    
    <div style={{marginTop: "100px"}}>
      <h3> Update </h3>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
      onSubmit={handleSubmit}
     >
      
      <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="Name"
          placeholder="Your Name "
          value={user.Name}
          onChange={handleChange}
        />

       <label htmlfor="email">Email</label>
       <input
       type="email"
       id="email"
       name="Email"
       placeholder="Your Email "
       value={ user.Email|| ''}
       onChange={handleChange}
       />

      <label htmlfor="contact">Contact</label>
       <input
       type="number"
       id="contact"
       name="Contact"
       placeholder="Phone No. "
       value={ user.Contact}
       onChange={handleChange}
       />

       
       <input type="submit" value="update"/>
       <Link to="/">
        <input type="button" id="button" value="Go back"/>
       </Link>
         </form>
     </div>
  );
    };

export default Update;