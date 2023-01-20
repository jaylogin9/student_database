In this project, basic CRUD operations are performed on student information.

1. There are mainly five operations performed:
   a. Retrieving all student records from the database
   b. Retrieving a specific student record by unique student ID
   c. Inserting new student information into the database
   d. Updating existing student information
   e. Deleting student information from the database.

2. Installation instructions:
 
  Backend (Server Folder):
   1. MySQL: Download from "https://dev.mysql.com/downloads/mysql/".
    In the database: "Mysql", Database Name: "react_1st", Table Name: "stud_info".

    a. Open the MySQL command line client.
    b. Create the database using the command "CREATE DATABASE react_1st;".
    c. Use the created database by typing "USE react_1st;".
    d. Create the table inside the database using the command "CREATE TABLE stud_info (id INT NOT NULL AUTO_INCREMENT, Name CHAR(40) NOT NULL, Email CHAR(40) NOT NULL, Contact CHAR(30) NOT NULL, PRIMARY KEY (id));".
  2. Node.js: Download from "https://nodejs.org/en/download/".
  3. Visual Studio Code: Download from "https://code.visualstudio.com/download".
  Required packages:
       a. Open the terminal (Visual Studio Code) and type "npm init -y" to install npm on your system.
       b. Then, type "npm i body-parser mysql2 cors express nodemon" to install required packages.
       c. After completing the above statements, run the index.js file.
       d. In the terminal, type "nodemon index" to start the server. If the message "Server Start" and "connection Created with MySQL Successfully" is displayed, the connection to the MySQL server has been established. If this message is not shown, there is a problem connecting to the MySQL server.

  Frontend (Client Folder): React.js
    Required packages:
        a. First, create a React app by opening the terminal and typing
        "npx create-react-app my-app", then
        "cd my-app" and
        "npm start".


