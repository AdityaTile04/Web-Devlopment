CREATE DATABASE facebook;

USE facebook;

CREATE TABLE user (
    id INT PRIMARY KEY,
    age INT, 
    name VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    friends INT DEFAULT 0
);

INSERT INTO user
(id,age,name,email)
VALUES
(1,19,"Aditya", "aditya@gmail.com"),
(2,20,"Saurabh", "saurabh@gmail.com"),
(3,21, "Rushikesh","rushi@gmail.com");

SELECT * FROM user;


CREATE TABLE post (
    id INT PRIMARY KEY,
    title VARCHAR(20),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO post
VALUES
(1,'profile picture',1),
(2,"background image",2);

SELECT * FROM post;