DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

CREATE TABLE departments (
     PRIMARY KEY(id)
    name VARCHAR(30) NULL,
    id INT PRIMARY KEY,
);

CREATE TABLE role (
     PRIMARY KEY(id)
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    department id INT NOT NULL,
    id PRIMARY KEY
)

    
CREATE TABLE employee (
    PRIMARY KEY(id)
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    id INT PRIMARY KEY
    );

    SELECT * FROM departments;
    SELECT * FROM role;
    SELECT * FROM employee;

