--! Operators in SQL 

CREATE DATABASE users;

USE users;

CREATE TABLE instaUsers (
    id INT PRIMARY KEY,
    age INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    followers INT DEFAULT 0,
    following INT DEFAULT 0
);

INSERT INTO instaUsers
(id,age,name,email,followers,following)
VALUES
(1,19,"Aditya","aditya@gmail.com",1000,200),
(2,20,"Gaurav","gaurav@gmail.com",400,260),
(3,17,"Kuanl","kunal@gmail.com",350,400),
(4,18,"Raj","raj@gmail.com",2200,600);

SELECT * FROM instaUsers;

SELECT age,name FROM instaUsers
WHERE age = 18 + 1;

SELECT age,name,followers FROM instaUsers
WHERE age >= 16 AND followers > 500;

SELECT * FROM instaUsers
WHERE followers >= 1000 OR age >= 22;

SELECT age,name FROM instaUsers
WHERE age BETWEEN 18 AND 20;

SELECT * FROM instaUsers
WHERE age IN (17);

SELECT * FROM instaUsers
WHERE NOT age = 19;

-- ! Limit Clause
-- Set an upper limit on number of (tuples) rows to be returned

SELECT * FROM instaUsers
LIMIT 2;

-- ! Order by clause
-- To sort in ascending (ASC) or descending order (DESC);

-- Ascending
SELECT * FROM instaUsers
ORDER BY id ASC;

-- Dscending
SELECT * FROM instaUsers
ORDER BY id DESC;

--! Aggregate Functions
-- Aggregate function perform a calculation on a set of values and return a single value.

-- 1. count()
SELECT count(followers)
FROM instaUsers
WHERE followers > 500;

-- 2. max()
SELECT max(followers)
FROM instaUsers

-- 3. min()
SELECT min(age)
FROM instaUsers;

-- 4. sum()
SELECT sum(followers)
FROM instaUsers;

SELECT sum(following)
FROM instaUsers;

-- 5. avg()
SELECT avg(followers)
FROM instaUsers;

--! Group by clause
-- Group rows that have the same valuse into summary rows.
-- it collect data from multiple records and groups the result by one or more column
-- Generally we used group by with some aggregation function.

SELECT id, max(followers)
FROM instaUsers
GROUP BY id;

SELECT name, max(following)
FROM instaUsers
GROUP BY name;

--! Having clause
-- Similar to where i.e applies some condition on rows 
-- But it is used when we want to apply any condition after grouping.
-- Grouping is necessary for HAVING.

SELECT name, max(followers)
FROM instaUsers
GROUP BY name
HAVING max(followers) > 500;

SELECT name, max(following)
FROM instaUsers
GROUP BY name
HAVING max(following) > 300

--! General order of clauses

SELECT id, max(followers)
FROM instaUsers
GROUP BY id
HAVING max(followers) > 300
ORDER BY id DESC;

--! Table Queries

--! 1. Update table
-- To update existing rows

UPDATE instaUsers
SET name = "kunal"
WHERE id  = 3;

UPDATE instaUsers
SET name = "Rushikesh", email = "rushikesh@gmail.com"
WHERE id = 4;

SELECT * FROM instaUsers;

--! 2. Delete table
-- To delete existing rows

DELETE FROM instaUsers
WHERE id = 3;


--! Alter 
-- To change the schema

-- 1. ADD column

ALTER TABLE instaUsers
ADD COLUMN city VARCHAR(20) DEFAULT "Nashik";

ALTER TABLE instaUsers
ADD COLUMN state VARCHAR(20) DEFAULT "Maharastra";

-- 2. DROP column

ALTER TABLE instaUsers
DROP COLUMN state;

-- 3. RENAME table
ALTER TABLE instaUsers
RENAME TO insta_users;

SELECT * FROM insta_users;

-- 4. CHANGE column 
ALTER TABLE insta_users
CHANGE COLUMN id u_id INT;

ALTER TABLE insta_users
CHANGE COLUMN age u_age INT;

-- 5. MODIFY column (modify datatype and constraint)
ALTER TABLE insta_users
MODIFY city VARCHAR(20) DEFAULT "Pune";

SELECT * FROM insta_users;

--! Truncate 
-- To delete tables data

TRUNCATE TABLE insta_users;

SELECT * FROM insta_users;