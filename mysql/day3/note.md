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






-- Comprehensive Overview of SQL Concepts

-- 1. Database Initialization

-- Using the database:
USE amityuniversity;

-- Disable SQL safe updates:
SET SQL_SAFE_UPDATES = 0;

--

-- 2. Creating Tables

-- Creating the `student` table:
CREATE TABLE student(
    rollno INT PRIMARY KEY, -- Primary key for unique identification
    name VARCHAR(50),      -- Name of the student
    marks INT NOT NULL,    -- Marks (cannot be null)
    grade VARCHAR(1),      -- Grade assigned (e.g., A, B, C)
    city VARCHAR(20)       -- City of the student
);

-- Creating the `payment` table:
CREATE TABLE payment (
    customer_id INT PRIMARY KEY, -- Unique ID for each customer
    customer VARCHAR(255),      -- Customer name
    mode VARCHAR(50),           -- Payment mode (e.g., Credit Card, Netbanking)
    city VARCHAR(100)           -- City of the customer
);

--

-- 3. Inserting Data

-- Inserting data into `payment` table:
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

-- Inserting data into `student` table:
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

--

-- 4. Querying Data

-- Basic Queries

-- Grouping by grade and counting students:
SELECT grade, COUNT(grade)
FROM student
GROUP BY grade; -- Groups students by grade and counts them

-- Selecting all students:
SELECT * FROM student; -- Fetches all columns for all students

-- Selecting distinct grades:
SELECT DISTINCT grade FROM student; -- Retrieves unique grades only

--

-- Filtering Data with WHERE

-- Students with marks >= 80:
SELECT * FROM student
WHERE marks >= 80; -- Filters students scoring 80 or above

-- Students with marks > 90 or from Mumbai:
SELECT * FROM student
WHERE marks > 90 OR city = 'Mumbai'; -- Filters students meeting either condition

-- Students with marks between 80 and 90:
SELECT * FROM student
WHERE marks BETWEEN 80 AND 90; -- Filters students within the range

-- Students from specific cities:
SELECT * FROM student
WHERE city IN ('Delhi', 'Mumbai'); -- Filters students from these cities

--

-- Sorting and Limiting Results

-- Top 3 students based on marks:
SELECT * FROM student
ORDER BY marks DESC
LIMIT 3; -- Sorts by marks in descending order and limits results to 3

--

-- 5. Aggregate Functions

-- Calculating average marks:
SELECT AVG(marks) FROM student; -- Calculates the average marks of all students

-- Counting students by city:
SELECT city, COUNT(name)
FROM student
GROUP BY city; -- Groups by city and counts the number of students

-- Average marks by city in ascending order:
SELECT city, AVG(marks) AS avg_marks
FROM student
GROUP BY city
ORDER BY avg_marks ASC; -- Sorts cities by their average marks in ascending order

-- Counting payment modes:
SELECT mode, COUNT(mode)
FROM payment
GROUP BY mode; -- Groups by payment mode and counts occurrences

--

-- Using HAVING

-- Cities with max marks > 90:
SELECT city, COUNT(rollno)
FROM student
GROUP BY city
HAVING MAX(marks) > 90; -- Filters grouped data where max marks exceed 90

--

-- 6. Updating Data

-- Update grades to 'F' for students with grade 'A':
UPDATE student
SET grade = 'F'
WHERE grade = 'A'; -- Changes all 'A' grades to 'F'

-- Increment marks by 1 for all students:
UPDATE student
SET marks = marks + 1; -- Adds 1 to the marks of all students

--

-- 7. Deleting Data

-- Delete students with marks less than 70:
DELETE FROM student
WHERE marks < 70; -- Removes records of students scoring below 70