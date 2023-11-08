DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  salary INT NOT NULL
);

CREATE TABLE employee (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  manager VARCHAR(100) NOT NULL
);

INSERT INTO departments (department_name)
VALUES ("Front of House"),
       ("Back of House");
       
INSERT INTO roles (title, department, salary)
VALUES ("Cashier", "Front of House", 30000),
       ("Barista", "Front of House", 30000),
       ("Cook", "Back of House", 30000);