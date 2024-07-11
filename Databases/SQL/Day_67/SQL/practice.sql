CREATE DATABASE main;

USE main;

CREATE TABLE employee (
    id INT,
    name VARCHAR(20),
    age INT,
    salary INT
);

INSERT INTO employee
VALUES
(1,"Aditya",19,70000),
(2,"Rushikesh",20,50000),
(3,"Kunal",20,40000);

SELECT * FROM employee;