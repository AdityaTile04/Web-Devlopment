--! Where clause
-- to difine some condition.

CREATE DATABASE data;

USE data;

CREATE TABLE employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    position VARCHAR(30) NOT NULL,
    salary INT DEFAULT 0,
    email VARCHAR(40) NOT NULL
);

INSERT INTO employee
(emp_id, name, position, salary, email)
VALUES
(101,"Aditya","Software Development Enginner",100000,"aditya@gmail.com"),
(102,"Rushikesh","HR",120000,"rushikesh@gmail.com"),
(103,"Kunal","Frontend Enginner",50000,"kunal@gmail.com"),
(104,"Ujjwal","web designer",100000,"ujjwal@gmail.com"),
(105,"Prased","Devops Enginner",100000,"prasad@gmail.com");

SELECT * FROM employee;

SELECT * FROM employee
WHERE salary <= 80000;

SELECT * FROM employee
WHERE salary >= 80000;




