const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker database.`)
);


const inquirer = require('inquirer');

const choices = [
     {
      type: "list",
      name: "choices",
      message: "What would you like to do?",
      choices: 
      ["View All Departments",
       "View All Roles",
       "View All Employees",
       "Add A Department",
       "Add A Role",
       "Add An Employee",
       "Update An Employee role"]
     }
  ];

  function menu () {
  inquirer.prompt(choices).then(function (answers) {
    console.log(answers);
    console.log(answers.choices);
    if (answers.choices === 'View All Departments') {

      allDepartments();
    } else if (answers.choices === 'View All Roles') {

      allRoles();

    } else if (answers.choices === 'View All Employees') {

      allEmployees();

    } else if (answers.choices === 'Add A Department') {

      addDepartment(menu());

    } else if (answers.choices === 'Add An Employee') {
     
      addEmployee(); 
    }
   }
  )};

  function allDepartments () {
    const sql = `SELECT * FROM department`;  
    db.query(sql, (err, rows) => {
      if (err) {
        throw err;
      }
      console.table(rows);

      menu();
   });
  }

  function allRoles () {
    const sql = `SELECT * FROM role`;  
    db.query(sql, (err, rows) => {
      if (err) {
        throw err;
      }
      console.table(rows);

      menu();
   });
  }

  function allEmployees () {
    const sql = `SELECT * FROM employee`;  
    db.query(sql, (err, rows) => {
      if (err) {
        throw err;
      }
      console.table(rows);

      menu();
   });
  }



function addDepartment () {
  inquirer.prompt({
    type: "input",
    name: "newdepartment",
    message: "What is the name of your new department?"
  }).then(function (answers) {
    const sql = `INSERT INTO department (name) VALUES ('${answers.newdepartment}')`;
    db.query(sql, (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Youre department has been added");

      menu();
    })
  })
  };


  function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first",
          message: "What is the first name of your new employee?",
        },
        {
          type: "input",
          name: "last",
          message: "What is the last name of your new employee?",
        },
        {
          type: "number",
          name: "role",
          message: "What is the role ID of your new employee?",
        },
        {
          type: "number",
          name: "department",
          message: "What is the department ID of your new employee?",
        },
        {
          type: "number",
          name: "manager",
          message: "What is the manager ID of your new employee?",
        },
      ])
      .then(function (answers) {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, department_id, manager_id) VALUES ('${answers.first}', '${answers.last}', '${answers.role}', '${answers.department}', '${answers.manager}')`;
        db.query(sql, (err, rows) => {
          if (err) {
            throw err;
          }
          console.log("Your employee has been added");
          menu();
        });
      });
  }

  menu();