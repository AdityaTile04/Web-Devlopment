--! Started learning MySQL Database

--! Database Queries

-- 1. To create database
-- CREATE DATABASE db.name;
-- CREATE DATABASE IF NOT EXISTS db.name;

-- 2. To delete database
-- DROP DATABASE db.name;
-- DROP DATABASE IF NOT EXISTS db.name;

-- 3.To databases
-- SHOW DATABASES;

-- 4.To show tables
-- SHOW TABLES;

-- Create Database
CREATE DATABASE student_info;

-- Use Database
USE student_info;

-- To create table in database
CREATE TABLE info (
    id INT,
    name VARCHAR(20),
    roll_no INT,
    subject VARCHAR(30),
    marks INT
);

-- Adding values in table
INSERT INTO info 
VALUES
(1, "Aditya", 10, "Machine Learning", 60),
(2, "Kunal", 20, "Operating System", 65),
(3, "Gaurav", 30, "Database Management System", 69);

-- To show table
SELECT * FROM info;

SHOW TABLES;