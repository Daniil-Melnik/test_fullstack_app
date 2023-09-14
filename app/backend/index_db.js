const mysql = require("mysql2");
const fs = require('fs');

let obj = {
  table: []
};
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dog_exhebition",
  password: "1234qseft"
});
 
// connection.query("CREATE DATABASE usersdb2",
//   function(err, results) {
//     if(err) console.log(err);
//     else console.log("База данных создана");
// });

const sql = "SELECT * FROM auto";
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const autos = results;
    let new_json = JSON.stringify(autos)
    fs.writeFile('auto.json', new_json, (err) => { 
      if (err) throw err; 
      console.log('Data written to file'); 
      }); 
});


 
connection.end();
// value="jdbc:mysql://localhost:3306/dog_exhebition" />
