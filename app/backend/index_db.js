const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234qseft"
});
 
connection.query("CREATE DATABASE usersdb2",
  function(err, results) {
    if(err) console.log(err);
    else console.log("База данных создана");
});
 
connection.end();
// value="jdbc:mysql://localhost:3306/dog_exhebition" />
