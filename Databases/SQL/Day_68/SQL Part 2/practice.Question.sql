--! Question 1

use college;

CREATE TABLE student (
    roll_no INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(20) NOT NULL,
    marks INT NOT NULL
);

INSERT INTO student 
VALUES
(110,"adam","Delhi",76),
(108, "bob","Mumbai",65),
(124,"casey","Pune",94),
(112,"duke","Pune",80);

SELECT * FROM student;

SELECT * FROM student
WHERE marks > 75;

SELECT DISTINCT city 
FROM student;

SELECT city FROM student
GROUP BY city;

SELECT city, max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(10) NOT NULL;

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE marks >= 70 AND marks < 60;

Update student
SET grade = "B"
WHERE marks >= 60 AND marks < 70 ;

SELECT * FROM student;




--! Question 2

CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    subject VARCHAR(30) NOT NULL,
    salary INT DEFAULT 0
);

INSERT INTO teacher
VALUES
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(35,"divya","physics",75000);

SELECT * FROM teacher;

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

UPDATE teacher
SET ctc = ctc * 0.25;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(20) DEFAULT "Pune";

ALTER TABLE teacher
DROP COLUMN city;