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

  function makeTemplate() {
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

  function EmployeeMake() {
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
            console.log("id: " + res[i].id + " || first_name: " + res[i].first_name+ " || last_mame: " + res[i].last_mame+" || role_id: " + res[i].role_id+" || manager_id: " + res[i].manager_id);
          }
          makeTemplate();
        });
      });
  }

  function roleMake() {
    inquirer
      .prompt({
        name: "role",
        type: "input",
        message: "Assign role info here."
      })
      .then(function(answer) {
        var query = "SELECT id, title, salary, department, FROM role WHERE ?";
        connection.query(query, { employee: answer.employee }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("id: " + res[i].id + " || title: " + res[i].title+ " || salary: " + res[i].salary+" || department: " + res[i].department);
          }
          makeTemplate();
        });
      });
  }


  function departmentMake() {
    inquirer
      .prompt({
        name: "department",
        type: "input",
        message: "add department here."
      })
      .then(function(answer) {
        var query = "SELECT id, name, FROM department WHERE ?";
        connection.query(query, { employee: answer.employee }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("id: " + res[i].id + " || name: " + res[i].name);
          }
          makeTemplate();
        });
      });
  }