const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker database.`)
);

app.post('/api/new-department', ({ body }, res) => {
    const sql = `INSERT INTO departments (department_name)
      VALUES (?)`;
    const params = [body.department_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

app.get('/api/departments', (req, res) => {
    const sql = `SELECT department_name, department_name AS title FROM departments`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  

//   Updating employee role
  app.put('/api/employees/:id', (req, res) => {
    const sql = `UPDATE employees SET job_title = ? WHERE id = ?`;
    const params = [req.body.employees, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });
// db.query('SELECT * FROM departments', function (err, results) {
//     // console.log(err)
//     console.log(results);
//   });


// const inquirer = require('inquirer');

// const choices = [
//      {
//       type: "list",
//       name: "choices",
//       message: "What would you like to do?",
//       choices: 
//       ["View All Departments",
//        "View All Roles",
//        "View All Employeees",
//        "Add A Department",
//        "Add A Role",
//        "Add An Employee",
//        "Update An Employee role"]
//      }
//   ];

//   inquirer.prompt(choices);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });