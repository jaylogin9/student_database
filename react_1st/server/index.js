const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql =require("mysql2");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//Connection extablish with local mysql database.
const db=mysql.createConnection({
    host: 'localhost' ,
    port: 3306 ,
    database: 'react_1st',
    user: 'root',
    password: 'mysql'
});

//connect to the database.
db.connect((err)=>{
    if(err){
       console.log("Error occures while connection");
     }else {
       console.log("connection Created with mysql Successfully");
     }
  });
 
  // Show the database.
  app.get("/api/get",(req,res)=>{
    const sqlGet='SELECT * FROM stud_info';
    db.query(sqlGet,(error,result)=>{
      res.send(result);
    });
  });

  // Insert the New data from database.
  app.post("/api/post",(req,res)=>{
    const { Name, Email, Contact} = req.body; //name,email,contact are table column names.
    console.log(req.body)
    const sqlInsert =
     "INSERT INTO stud_info (Name,Email,Contact) VALUES (?,?,?)";
     db.query(sqlInsert,[Name,Email,Contact], (error,result)=>{
      if (error){
        console.log("error",error);
      }
       });
   });

   // Delete Operation ("To Delete resource")
app.delete("/api/remove/:id",(req,res)=>{
  const {id} = req.params;
  const sqlRemove = "DELETE FROM stud_info WHERE id = ?";
   db.query(sqlRemove, id, (error,result)=>{
    if(error){
      console.log("error",error);
     } else {
        console.log("Deleted the Data");
     }
    });
 });

// Get the data or view the data through id.
app.get("/api/get/:id",(req,res)=>{
  const {id}=req.params;

  console.log(req.params)
  const sqlGet = "SELECT * FROM stud_info WHERE id=?";
  db.query(sqlGet,[id],(error,result)=>{
    if(error){
      console.log("error",error);
    } else {
      res.send(result[0]);
      console.log("Result:-",result[0]); 
       }
     });
   });
  
   
   //Put Operation ("To Update a entire or whole resource")
   app.put("/api/put/:id",(req,res)=>{
     const {id} = req.params;
     const {Name, Email, Contact} = req.body;
     const sqlUpdate = 
      "UPDATE stud_info SET Name=?, Email = ?, Contact = ? where id =?";
      db.query(sqlUpdate,[Name, Email, Contact, id], (error,result)=>{
       if(error){
         console.log("error",error);
        }
        else {
         res.send("update"); 
         console.log("Update: ",result);
        }
      });
    });


app.listen(8000,()=>{
    console.log("Server Start");
})