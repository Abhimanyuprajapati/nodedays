SQL Notes with Coding Examples
WHERE Clause
The WHERE clause is used to filter records based on specific conditions. Operators like arithmetic, comparison, logical, and bitwise operators can be used.

Using Operators in WHERE
Arithmetic Operator

SELECT * FROM students
WHERE marks + 10 > 90;
Comparison Operator

SELECT * FROM students
WHERE marks >= 90;
Logical Operator

SELECT * FROM students
WHERE marks > 90 AND city = 'Boston';
ORDER BY Clause
The ORDER BY clause is used to sort the result set in ascending (ASC) or descending (DESC) order.

Example:
SELECT * FROM students
ORDER BY marks DESC;
Aggregate Functions
Aggregate functions perform calculations on a set of values and return a single value.

Common Aggregate Functions:
COUNT(): Counts the number of rows.

SELECT COUNT(*) AS student_count
FROM students;
MAX(): Finds the maximum value.

SELECT MAX(marks) AS highest_marks
FROM students;
MIN(): Finds the minimum value.

SELECT MIN(marks) AS lowest_marks
FROM students;
SUM(): Calculates the total sum.

SELECT SUM(marks) AS total_marks
FROM students;
AVG(): Calculates the average value.

SELECT AVG(marks) AS average_marks
FROM students;
GROUP BY Clause
The GROUP BY clause groups rows that have the same values into summary rows. Often used with aggregate functions.

Example:
SELECT city, AVG(marks) AS avg_marks
FROM students
GROUP BY city;
Practice Questions
Find the average marks in each city in ascending order:

SELECT city, AVG(marks) AS avg_marks
FROM students
GROUP BY city
ORDER BY avg_marks ASC;
Count the number of students in each city where the maximum marks cross 90:

SELECT city, COUNT(*) AS student_count
FROM students
GROUP BY city
HAVING MAX(marks) > 90;
HAVING Clause
The HAVING clause applies conditions after grouping the data, unlike WHERE, which applies to rows before grouping.

Example:
SELECT city, AVG(marks) AS avg_marks
FROM students
GROUP BY city
HAVING AVG(marks) > 80;
General SQL Query Execution Order
SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s)
Foreign Keys and Cascading
Foreign keys link two tables and enforce referential integrity. Cascading ensures changes in one table propagate to related tables.

Example:
Create Tables:
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
Insert Data:
INSERT INTO departments (dept_id, dept_name) VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance');

INSERT INTO employees (emp_id, emp_name, dept_id) VALUES
(101, 'Alice', 1),
(102, 'Bob', 2),
(103, 'Charlie', 3);
Cascade Effect:
If a department is deleted, all employees in that department are also deleted.
If a department ID is updated, it updates the dept_id in the employees table.



-- Active: 1736351091953@@127.0.0.1@3306@amityuniversity
USE amityuniversity;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

CREATE TABLE payment (
    customer_id INT PRIMARY KEY,
    customer VARCHAR(255),
    mode VARCHAR(50),
    city VARCHAR(100)
);

INSERT INTO payment (customer_id, customer, mode, city) VALUES
(101, 'Olivia Barrett', 'Netbanking', 'Portland'),
(102, 'Ethan Sinclair', 'Credit Card', 'Miami'),
(103, 'Maya Hernandez', 'Credit Card', 'Seattle'),
(104, 'Liam Donovan', 'Netbanking', 'Denver'),
(105, 'Sophia Nguyen', 'Credit Card', 'New Orleans'),
(106, 'Caleb Foster', 'Debit Card', 'Minneapolis'),
(107, 'Ava Patel', 'Debit Card', 'Phoenix'),
(108, 'Lucas Carter', 'Netbanking', 'Boston'),
(109, 'Isabella Martinez', 'Netbanking', 'Nashville'),
(110, 'Jackson Brooks', 'Credit Card', 'Boston');



INSERT INTO student (rollno, name, marks, grade, city) VALUES
(1, 'Aman Sharma', 85, 'A', 'Delhi'),
(2, 'Priya Verma', 92, 'A', 'Mumbai'),
(3, 'Rahul Mehta', 76, 'B', 'Chennai'),
(4, 'Anjali Gupta', 88, 'A', 'Kolkata'),
(5, 'Rohit Singh', 63, 'C', 'Jaipur'),
(6, 'Neha Kapoor', 95, 'A', 'Pune'),
(7, 'Arjun Reddy', 70, 'B', 'Hyderabad'),
(8, 'Kriti Jain', 81, 'A', 'Ahmedabad'),
(9, 'Vikram Malhotra', 55, 'D', 'Bangalore'),
(10, 'Sneha Roy', 89, 'A', 'Lucknow');

SELECT grade , COUNT(grade)
FROM student GROUP BY grade;

SELECT * FROM student;

SELECT DISTINCT grade FROM student;

-- 
SELECT * FROM student WHERE marks >= 80;
SELECT * FROM student WHERE marks > 90 OR city = "Mumbai";

SELECT * FROM student WHERE marks BETWEEN 80 AND 90;


SELECT * FROM student WHERE city  IN ("Delhi" , "Mumbai");


SELECT * FROM student ORDER BY marks DESC LIMIT 3;


SELECT AVG(marks) FROM student;


SELECT city , COUNT(name) FROM student GROUP BY city;

SELECT city , AVG(marks) FROM student GROUP BY city ORDER BY city ASC

SELECT mode , COUNT(mode) FROM payment GROUP BY mode 


SELECT city , COUNT(rollno) FROM student GROUP BY city HAVING MAX(marks) > 90;


-- update query

UPDATE student SET grade = "F" WHERE grade = 'A';

UPDATE student SET marks = marks +1;

-- Delete

DELETE from student WHERE marks < 70