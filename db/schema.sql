DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  department_id INT
  -- FOREIGN KEY (department_id)
  --   REFERENCES deparmtent(id)
  --   ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT,
  department_id INT,
  manager_id INT
  --  FOREIGN KEY (department_id, role_id, manager_id)
  --   REFERENCES deparmtent(id)
  --   ON DELETE CASCADE
);
