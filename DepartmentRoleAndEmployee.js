var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
 
  password: "",
  database: "eployee_trackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    makeTemplate();
  });

  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "Add an employee",
          "Add a role",
          "Assiagn a department",
        ]
      });