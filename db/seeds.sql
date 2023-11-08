INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
       
INSERT INTO roles (title, department, salary)
VALUES ("Sales Lead", "Sales", 100000),
       ("Salesperson", "Sales", 80000),
       ("Lead Engineer", "Engineering", 150000),
       ("Software Engineer", "Engineering", 120000),
       ("Account Manager", "Finance", 160000),
       ("Accountant", "Finance", 125000),
       ("Legal Team Lead", "Legal", 250000),
       ("Lawyer", "Legal", 190000);

INSERT INTO employees (first_name, last_name, job_title, department, salary, manager)
VALUES ("John", "Doe", "Sales Lead", "Sales", 100000, "none"),
       ("Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe"),
       ("Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000, "none"),
       ("Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriguez"),
       ("Kunal", "Singh", "Account Manager", "Finance", 160000, "none"),
       ("Malia", "Brown", "Accountant", "Finance", 125000, "Kunal Singh"),
       ("Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, "none"),
       ("Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd");