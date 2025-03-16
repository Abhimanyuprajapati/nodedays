

## **SQL `ALTER` Command**✅

The `ALTER` command is used to modify the structure of an existing table. It allows you to add, delete, or modify columns in a table, as well as rename columns or the table itself.

---

### **1. Adding a New Column**

To add a new column to an existing table, use the `ADD COLUMN` clause.

#### Syntax:
```sql
ALTER TABLE table_name 
ADD COLUMN column_name datatype [constraints];
```

#### Example:
```sql
-- Adding a new column 'age' with data type INT and default value 19.
ALTER TABLE student 
ADD COLUMN age INT NOT NULL DEFAULT 19;
```

**Explanation:**
- `NOT NULL` ensures the column cannot store `NULL` values.
- `DEFAULT 19` sets the default value of the `age` column to 19.

---

### **2. Dropping a Column**

To remove a column from a table, use the `DROP COLUMN` clause.

#### Syntax:
```sql
ALTER TABLE table_name 
DROP COLUMN column_name;
```

#### Example:
```sql
-- Dropping the 'age' column from the 'student' table.
ALTER TABLE student 
DROP COLUMN age;
```

**Note:** Dropping a column permanently deletes its data, so use it carefully.

---

### **3. Renaming a Table**

To rename an existing table, use the `RENAME` clause.

#### Syntax:
```sql
ALTER TABLE old_table_name 
RENAME TO new_table_name;
```

#### Example:
```sql
-- Renaming table 'student' to 'stu'.
ALTER TABLE student 
RENAME TO stu;
```

---

### **4. Renaming a Column**

To rename a column, use the `CHANGE` clause. This also allows you to modify its data type and constraints.

#### Syntax:
```sql
ALTER TABLE table_name 
CHANGE old_column_name new_column_name new_datatype [new_constraints];
```

#### Example:
```sql
-- Renaming column 'age' to 'stu_age' and changing its datatype to INT.
ALTER TABLE student 
CHANGE age stu_age INT;
```

---

### **5. Modifying a Column**

To change a column's data type or constraints without renaming it, use the `MODIFY` clause.

#### Syntax:
```sql
ALTER TABLE table_name 
MODIFY column_name new_datatype [new_constraints];
```

#### Example:
```sql
-- Modifying the data type of 'stu_age' to VARCHAR(2).
ALTER TABLE student 
MODIFY COLUMN stu_age VARCHAR(2);
```

**Key Points:**
- Use `MODIFY` when the column name remains the same.
- Ensure the new data type is compatible with existing data.

---

### **6. Adding Multiple Columns**

You can add multiple columns in a single statement by separating them with commas.

#### Example:
```sql
ALTER TABLE student 
ADD COLUMN address VARCHAR(255),
ADD COLUMN phone_number VARCHAR(15);
```

---

### **7. Dropping Multiple Columns**

Some databases (like MySQL 8.0+) support dropping multiple columns in a single statement.

#### Example:
```sql
ALTER TABLE student 
DROP COLUMN address,
DROP COLUMN phone_number;
```

---

### **8. Renaming Multiple Columns**

In databases like MySQL, renaming multiple columns requires separate `ALTER` statements for each column.

#### Example:
```sql
-- Renaming multiple columns.
ALTER TABLE student CHANGE stu_age age INT;
ALTER TABLE student CHANGE phone_number contact_number VARCHAR(15);
```

---

### **9. Best Practices for Using `ALTER`**

1. **Backup Data:** Always back up the database before making structural changes.
2. **Test Changes:** Apply changes in a staging environment before production.
3. **Check Compatibility:** Ensure the new data type or constraints are compatible with existing data.

---

### **Comprehensive Example:**

```sql
-- Initial Table
CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

-- Add a new column 'age'
ALTER TABLE student 
ADD COLUMN age INT DEFAULT 20;

-- Rename 'age' to 'student_age'
ALTER TABLE student 
CHANGE age student_age INT;

-- Modify 'student_age' data type to VARCHAR(3)
ALTER TABLE student 
MODIFY COLUMN student_age VARCHAR(3);

-- Add multiple columns
ALTER TABLE student 
ADD COLUMN address VARCHAR(255),
ADD COLUMN phone_number VARCHAR(15);

-- Drop a column
ALTER TABLE student 
DROP COLUMN address;

-- Rename the table
ALTER TABLE student 
RENAME TO student_details;
```

---

### **Error Handling Tips**

1. **`Column doesn't exist`:** Ensure the column name matches the table schema.
2. **`Data type mismatch`:** Verify the new data type is valid for the column.
3. **`Invalid table name`:** Ensure the table exists in the database.

---


<!-- after querry sql -->
-- Active: 1736351091953@@127.0.0.1@3306@amityuniversity
SELECT * FROM student;

-- *ADD COLUMN

ALTER TABLE student ADD COLUMN age INT;


-- *DROP COLUMN

ALTER TABLE student  DROP COLUMN age;


-- *rename table
ALTER TABLE surajtable RENAME to student;


-- *change column(rename)
--*alter table table_name change column old_name new_name new_datatype new_constraint;

-- *MODIFY COLUMNS (MODIFY DATA TYPE/ CONSTRAINTS)

-- *ALTER TABLE table_name MODIFY col_name new_datatype new_constraint;


--- **ADD COLUMN
ALTER TABLE student 
ADD COLUMN age INT NOT NULL  DEFAULT 19;

--- ** MODIFY COLUMN
ALTER TABLE student 
MODIFY COLUMN age VARCHAR(2)


--- ** CHANGE COLUMN (RENAME)
ALTER Table student
CHANGE age stu_age INT

--- ** DROP COLUMN

ALTER dTable student
DROP COLUMN stu_age;

--- ** RENAME TABLE
ALTER TABLE student RENAME to stu;

<!-- ================================= -->

<!-- join querry -->
-- Active: 1736351091953@@127.0.0.1@3306@amityuniversity

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
)

INSERT INTO students (id ,  name)
VALUES 
(101 , "Adam"),
(102 , "Bob"),
(103 , "Casey")

CREATE TABLE course(
    id INT PRIMARY KEY,
    course VARCHAR(50)
)

INSERT INTO course (id , course)
    VALUES 
    (102 , "English"),
    (105 , "Maths"),
    (103 , "Science"),
    (107 , "Computer Science")


    -- Inner Joins

    SELECT * FROM students INNER JOIN course ON students.id = course.id

    -- Left Joins

    SELECT * FROM students LEFT JOIN course ON students.id = course.id


-- -right joins

 SELECT * FROM students RIGHT JOIN course ON students.id = course.id

--  -- full Join

    SELECT * FROM students LEFT JOIN course ON students.id = course.id
    UNION  SELECT * FROM students RIGHT JOIN course ON students.id = course.id

    -- left exclusive and right exclusive join ND SELF JOIN s ( assignment)
    
    <!-- ==================== -->

    joint.md 

    ### **SQL Joins with Explanations and Venn Diagrams**

Joins are used to combine rows from two or more tables based on a related column between them. Below are the different types of joins with examples and Venn diagrams to illustrate their behavior.

---

### **1. INNER JOIN**

An `INNER JOIN` returns only the rows that have matching values in both tables.

#### **Query:**
```sql
SELECT * 
FROM students 
INNER JOIN course 
ON students.id = course.id;
```

#### **Result:**
| id  | name   | id  | course        |
|-----|--------|-----|---------------|
| 102 | Bob    | 102 | English       |
| 103 | Casey  | 103 | Science       |

**Explanation:**
- Only rows with matching `id` in both `students` and `course` tables are included.

#### **Venn Diagram:**
```
       +-----+
   A   |     |   B
       +-----+
  (Intersection is the result)
```

---

### **2. LEFT JOIN**

A `LEFT JOIN` returns all rows from the left table (`students`), and the matching rows from the right table (`course`). If there’s no match, NULL values are returned for the right table.

#### **Query:**
```sql
SELECT * 
FROM students 
LEFT JOIN course 
ON students.id = course.id;
```

#### **Result:**
| id  | name   | id  | course        |
|-----|--------|-----|---------------|
| 101 | Adam   | NULL | NULL          |
| 102 | Bob    | 102  | English       |
| 103 | Casey  | 103  | Science       |

**Explanation:**
- Rows from `students` are fully included, even if there’s no match in `course`.

#### **Venn Diagram:**
```
       +-----+
   A   |     |
       +-----+
       (All of A + matches from B)
```

---

### **3. RIGHT JOIN**

A `RIGHT JOIN` returns all rows from the right table (`course`), and the matching rows from the left table (`students`). If there’s no match, NULL values are returned for the left table.

#### **Query:**
```sql
SELECT * 
FROM students 
RIGHT JOIN course 
ON students.id = course.id;
```

#### **Result:**
| id  | name   | id  | course        |
|-----|--------|-----|---------------|
| 102 | Bob    | 102  | English       |
| 103 | Casey  | 103  | Science       |
| NULL| NULL   | 105  | Maths         |
| NULL| NULL   | 107  | Computer Science |

**Explanation:**
- Rows from `course` are fully included, even if there’s no match in `students`.

#### **Venn Diagram:**
```
       +-----+
         |     |   B
         +-----+
       (All of B + matches from A)
```

---

### **4. FULL OUTER JOIN**

A `FULL OUTER JOIN` combines the results of both `LEFT JOIN` and `RIGHT JOIN`. It includes all rows from both tables, with NULLs in places where no match is found.

#### **Query:**
```sql
SELECT * 
FROM students 
LEFT JOIN course 
ON students.id = course.id
UNION 
SELECT * 
FROM students 
RIGHT JOIN course 
ON students.id = course.id;
```

#### **Result:**
| id  | name   | id  | course        |
|-----|--------|-----|---------------|
| 101 | Adam   | NULL | NULL          |
| 102 | Bob    | 102  | English       |
| 103 | Casey  | 103  | Science       |
| NULL| NULL   | 105  | Maths         |
| NULL| NULL   | 107  | Computer Science |

**Explanation:**
- All rows from both `students` and `course` tables are included.

#### **Venn Diagram:**
```
       +-----+
   A   |     |   B
       +-----+
  (All of A and B with NULLs for non-matching rows)
```

---

### **5. LEFT EXCLUSIVE JOIN**

A `LEFT EXCLUSIVE JOIN` returns rows that are in the left table (`students`) but not in the right table (`course`).

#### **Query:**
```sql
SELECT * 
FROM students 
LEFT JOIN course 
ON students.id = course.id
WHERE course.id IS NULL;
```

#### **Result:**
| id  | name   | id   | course |
|-----|--------|------|--------|
| 101 | Adam   | NULL | NULL   |

**Explanation:**
- Only rows from `students` that don’t have a match in `course` are included.

#### **Venn Diagram:**
```
       +     
   A   |     
       +     
  (Only A minus B intersection)
```

---

### **6. RIGHT EXCLUSIVE JOIN**

A `RIGHT EXCLUSIVE JOIN` returns rows that are in the right table (`course`) but not in the left table (`students`).

#### **Query:**
```sql
SELECT * 
FROM students 
RIGHT JOIN course 
ON students.id = course.id
WHERE students.id IS NULL;
```

#### **Result:**
| id   | name  | id   | course          |
|------|-------|------|-----------------|
| NULL | NULL  | 105  | Maths           |
| NULL | NULL  | 107  | Computer Science|

**Explanation:**
- Only rows from `course` that don’t have a match in `students` are included.

#### **Venn Diagram:**
```
       +     
         |   B
         +     
  (Only B minus A intersection)
```

---

### **7. SELF JOIN**

A `SELF JOIN` is used to join a table to itself. This is useful for hierarchical or comparative data.

#### Example Query:
```sql
SELECT a.id AS student1_id, a.name AS student1_name, 
       b.id AS student2_id, b.name AS student2_name 
FROM students a, students b 
WHERE a.id <> b.id;
```

**Explanation:**
- In this query, we join `students` table with itself to compare each student with every other student.

#### **Venn Diagram:**
Self joins don't have a typical Venn diagram since they involve the same table.

---

### **Summary Table of Joins**

| Join Type            | Includes Rows From | Matching Rows | Non-Matching Rows |
|----------------------|--------------------|---------------|--------------------|
| INNER JOIN           | Both Tables       | Yes           | No                 |
| LEFT JOIN            | Left Table        | Yes           | Yes (NULL for right)|
| RIGHT JOIN           | Right Table       | Yes           | Yes (NULL for left)|
| FULL OUTER JOIN      | Both Tables       | Yes           | Yes (NULL for both)|
| LEFT EXCLUSIVE JOIN  | Left Table        | No            | Yes (left-only)    |
| RIGHT EXCLUSIVE JOIN | Right Table       | No            | Yes (right-only)   |
| SELF JOIN            | Same Table        | Yes           | Depends on logic   |


<!-- =============== -->

<!-- sub querry md -->

### **SQL Subqueries: Notes with Examples**

A **subquery** is a query nested within another query. Subqueries are useful for solving complex problems by breaking them into smaller, manageable parts. They are enclosed in parentheses `()` and can be used in different clauses like `WHERE`, `FROM`, and `SELECT`.

---

### **Types of Subqueries**

1. **Single-row Subqueries**: Return a single value (e.g., MAX, AVG, or COUNT).
2. **Multi-row Subqueries**: Return multiple values (e.g., a list of values).
3. **Correlated Subqueries**: Refer to columns in the outer query and execute once for every row in the outer query.

---

### **1. Subquery in `WHERE` Clause**

Subqueries in the `WHERE` clause are used to filter rows based on a condition calculated in the subquery.

#### **Example 1: Find the marks of students above the average.**
```sql
SELECT full_name, marks 
FROM student 
WHERE marks > (SELECT AVG(marks) FROM student);
```
- **Inner Query:** `(SELECT AVG(marks) FROM student)` calculates the average marks.
- **Outer Query:** Filters students with marks greater than the average.

---

#### **Example 2: Find the names of all students with even roll numbers.**
```sql
SELECT full_name, rollno 
FROM student 
WHERE rollno IN (SELECT rollno FROM student WHERE rollno % 2 = 0);
```
- **Inner Query:** `(SELECT rollno FROM student WHERE rollno % 2 = 0)` retrieves all even roll numbers.
- **Outer Query:** Returns student names matching these roll numbers.

---

### **2. Subquery in `FROM` Clause**

Subqueries in the `FROM` clause create a temporary table (a derived table) that can be queried by the outer query.

#### **Example: Find the maximum marks of students from Delhi.**
```sql
SELECT MAX(marks) 
FROM (SELECT * FROM student WHERE city = 'Delhi') AS temp;
```
- **Step 1 (Inner Query):** `SELECT * FROM student WHERE city = 'Delhi'` filters students from Delhi.
- **Step 2 (Outer Query):** `SELECT MAX(marks)` finds the maximum marks among these students.
- **Alias (`AS temp`):** Used to reference the subquery as a table.

---

### **3. Subquery in `SELECT` Clause**

Subqueries in the `SELECT` clause return a calculated value for each row in the result set.

#### **Example: Add a column to show the average marks of all students.**
```sql
SELECT full_name, marks, (SELECT AVG(marks) FROM student) AS average_marks 
FROM student;
```
- The subquery calculates the overall average marks.
- The result is displayed alongside each student's marks.

---

### **4. Correlated Subqueries**

A **correlated subquery** references columns from the outer query and is executed once for every row in the outer query.

#### **Example: Find students with marks above the average of their class.**
```sql
SELECT full_name, marks, class 
FROM student AS s1 
WHERE marks > (SELECT AVG(marks) FROM student AS s2 WHERE s1.class = s2.class);
```
- The subquery calculates the average marks for the current student's class (`s1.class = s2.class`).

---

### **Subquery vs. Joins**

- **When to use Subqueries:** 
  - When you need a temporary calculation.
  - For readability in simple scenarios.
- **When to use Joins:** 
  - For combining data from multiple tables efficiently.

---

### **Best Practices for Subqueries**

1. **Optimize Performance:**
   - Avoid unnecessary subqueries if the same result can be achieved with joins.
   - Use indexed columns in subqueries to enhance performance.

2. **Use Aliases:** 
   - Name the derived table for clarity and usability (e.g., `AS temp`).

3. **Avoid Correlated Subqueries for Large Datasets:**
   - Correlated subqueries can be slow for large tables as they execute repeatedly.

---

### **Summary Table of Subquery Usage**

| Clause      | Description                                                     | Example Query                          |
|-------------|-----------------------------------------------------------------|----------------------------------------|
| `WHERE`     | Filters rows based on a subquery result.                        | `WHERE marks > (SELECT AVG(marks))`    |
| `FROM`      | Treats the subquery as a temporary table.                       | `FROM (SELECT * FROM student)`         |
| `SELECT`    | Adds calculated data as a column in the result set.             | `(SELECT AVG(marks)) AS average_marks` |
| Correlated  | Executes the subquery for each row in the outer query.          | `WHERE marks > (SELECT AVG(...))`      |


<!-- sub querry sql -->

-- Active: 1736351091953@@127.0.0.1@3306@amityuniversity
-- sqL SUB qUERIES


-- *Used in where

-- Find the marks of student which is above average
SELECT full_name , marks FROM student WHERE marks > (SELECT AVG(marks) FROM student);

-- Find the names of all students with even roll numbers;



SELECT full_name ,rollno FROM student WHERE rollno IN (SELECT rollno from student WHERE rollno % 2 = 0)


-- *Use in from

-- Find the max marks from the students of delhi
-- step-1 find the students of delhi
-- step-2 find their max marks using the sublist in step1

    SELECT MAX(marks) FROM ( SELECT * from student WHERE city = 'Delhi') as temp

    <!-- ============================= -->

<!-- truncate querry -->

-- Active: 1736351091953@@127.0.0.1@3306@amityuniversity
-- truncate delte the data of the table

TRUNCATE TABLE student;

-- Practice questions

-- os: in the student TABLE
--     change the name of the column "name" to "full_name"
--     delete all the students who scored marks less than 80.
--     delete the column for grade

ALTER Table student 
CHANGE name full_name VARCHAR(50)  


DELETE FROM student WHERE marks < 80

ALTER TABLE student
DROP COLUMN grade


md file 

### **TRUNCATE Command in SQL**

The `TRUNCATE` command is used to remove all rows from a table, effectively resetting it to an empty state. It is faster than the `DELETE` command for this purpose because it doesn't log individual row deletions.

---

### **Syntax:**
```sql
TRUNCATE TABLE table_name;
```

#### Example:
```sql
TRUNCATE TABLE student;
```

**Explanation:**
- **`TRUNCATE`**: This command removes all rows from the table.
- **`TABLE student`**: Specifies the table (`student`) to truncate.

---

### **Key Differences: `TRUNCATE` vs `DELETE`**

| Feature               | `TRUNCATE`                                    | `DELETE`                                   |
|-----------------------|-----------------------------------------------|-------------------------------------------|
| **Operation**          | Removes all rows quickly.                    | Can remove specific rows or all rows.     |
| **Condition Support**  | Does not support `WHERE` conditions.          | Supports `WHERE` to delete specific rows. |
| **Logging**            | Minimal logging (DDL operation).             | Fully logs each deleted row (DML operation). |
| **Speed**              | Faster because it doesn't log row deletions. | Slower for large datasets.                |
| **Reset Auto-Increment** | Resets the auto-increment counter to 1 (in MySQL). | Does not reset the auto-increment value.  |
| **Rollback**           | Cannot be rolled back (irreversible).         | Can be rolled back if within a transaction. |
| **Triggers**           | Does not activate `ON DELETE` triggers.       | Activates `ON DELETE` triggers.           |

---

### **When to Use TRUNCATE?**

- When you need to quickly remove all data from a table.
- When you do not need to track row deletions for recovery.
- When you want to reset the auto-increment counter in MySQL.

---

### **Scenarios and Examples**

#### **1. Reset a Table:**
```sql
TRUNCATE TABLE student;
```
Removes all rows from the `student` table and resets the auto-increment ID.

#### **2. Before Reloading Data:**
```sql
-- Clean the table before importing new data
TRUNCATE TABLE orders;
```
Use `TRUNCATE` to clear the table for fresh data loading.

---

### **Limitations and Cautions:**
1. **Irreversible:** Once executed, `TRUNCATE` cannot be undone, even within a transaction.
2. **No Conditions:** You cannot specify a `WHERE` clause, so use `DELETE` if you need selective deletion.
3. **Foreign Keys:** If the table has foreign key constraints, truncating it may fail unless you disable or drop the constraints temporarily.

---

### **Key Points:**
- `TRUNCATE` is a **DDL (Data Definition Language)** command.
- Faster than `DELETE` for removing all rows in large tables.
- Cannot be used on tables with active foreign key constraints (without disabling them).

### **Final Note:**
Use `TRUNCATE` for performance-critical operations when clearing all data from a table is required, but be cautious as it does not offer flexibility like `DELETE`.

### **Practice Questions Explanation**

#### **1. Rename the column `name` to `full_name`:**
You can use the `CHANGE` clause in the `ALTER TABLE` statement to rename a column and optionally change its data type or constraints.

#### SQL Query:
```sql
ALTER TABLE student 
CHANGE name full_name VARCHAR(50);
```

**Explanation:**
- `name`: The current column name.
- `full_name`: The new column name.
- `VARCHAR(50)`: Defines the data type and size of the column after renaming. This is necessary when using the `CHANGE` clause.

---

#### **2. Delete all students who scored marks less than 80:**
To delete rows based on a condition, use the `DELETE FROM` statement with a `WHERE` clause.

#### SQL Query:
```sql
DELETE FROM student 
WHERE marks < 80;
```

**Explanation:**
- `DELETE FROM student`: Deletes rows from the `student` table.
- `WHERE marks < 80`: Ensures only rows where the `marks` column is less than 80 are removed.

---

#### **3. Delete the `grade` column from the table:**
To remove a column from a table, use the `DROP COLUMN` clause in the `ALTER TABLE` statement.

#### SQL Query:
```sql
ALTER TABLE student 
DROP COLUMN grade;
```

**Explanation:**
- `DROP COLUMN grade`: Removes the column named `grade` from the table `student`.

---

### **Final SQL Script**

Combining all the tasks into a single script:
```sql
-- Rename the column 'name' to 'full_name'
ALTER TABLE student 
CHANGE name full_name VARCHAR(50);

-- Delete all students who scored marks less than 80
DELETE FROM student 
WHERE marks < 80;

-- Drop the column 'grade'
ALTER TABLE student 
DROP COLUMN grade;
```

---

### **Additional Notes**

1. **Renaming Columns:**
   - In some RDBMS (like PostgreSQL), use `ALTER TABLE table_name RENAME COLUMN old_name TO new_name;`.

2. **Deleting Rows:**
   - The `DELETE` command removes rows selectively based on a condition.
   - If you want to delete all rows, use `TRUNCATE TABLE student;` for faster operation.

3. **Dropping Columns:**
   - Be cautious when dropping columns, as this action is irreversible.

   <!-- ========================== -->
