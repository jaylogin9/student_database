# student_database
In this project, basic CRUD operations are performed on student information.
1. There are mainly 5 operation performed 
 a. To get the all Student database.
 b. To get perticular student database through its uniqe student id.
 c. To insert new  student information into the database.
 d. To update the student information.
 e. And last To delete the student information.


2.Installation instructions:- There are two section a. Backend(Server Folder) b. Frontend(Client Folder).
  a.For Backend :- Node.js and MySQL.
    1.For MySQL:- For Download Go to "https://dev.mysql.com/downloads/mysql/" .
     In the database:- "Mysql",  Database Name:-"react_1st" and Table Name:-"stud_info" . 
       creating Database 
     a. Firstly, open Mysql command line client.
     b. create database,command are:- "CREATE DATABASE react_1st;"
     c. then type in terminal:- "USE react_1st;"
     d. create table inside the database:- " CREATE TABLE stud_info (id INT NOT NULL AUTO INCREMENT, Name CHAR(40) NOT NULL, Email CHAR(40) NOT NULL, Contact CHAR(30) NOT NULL, PRIMARY KEY (id) ); "
    2. For Node.js :- Download Go to "https://nodejs.org/en/download/".
    3. For Visual Studio Code:- Download Go to "https://code.visualstudio.com/download".
  Requirement Packages:- 
    1. Firstly open the terminal means (Visual studio code) and type "npm init -y"; for installing the npm on your system.
    2. then, type "npm -i body-parser mysql2 cors express nodemon;"
    3. after completing the above statement Run the index.js file.
    4. In Terminal type "nodemon index" after compile messsage display "Server Start" and if next line     "connection  Created with mysql Successfully" its show means connection extablish with mysql, if it is not shown means problem to connect the mysql.
  
  b.For Frontend :- React.js
    Requirement Packages:- 
    1. First create React App, show open terminal and 
      type :-
      "npx create-react-app my-app" ENTER
      "cd my-app" ENTER
      "npm start" ENTER


        

  