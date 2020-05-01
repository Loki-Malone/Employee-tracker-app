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
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Add an employee":
          EmployeeTemplate();
          break;
  
        case "add a role":
          roleTemplate();
          break;
  
        case "Assiagn a department":
          departmentTemplate();
          break;
  
        
        }
      });
  }

  function EmployeeTemplate() {
    inquirer
      .prompt({
        name: "Employee",
        type: "input",
        message: "Put Employee info here."
      })
      .then(function(answer) {
        var query = "SELECT id, first_name, last_name, role_id, manager_id FROM employee WHERE ?";
        connection.query(query, { employee: answer.employee }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("id: " + res[i].position + " || first_name: " + res[i].first_name+ " || last_mame: " + res[i].last_mame+" || role_id: " + res[i].role_id+" || manager_id: " + res[i].manager_id);
          }
          EmployeeTemplate();
        });
      });
  }