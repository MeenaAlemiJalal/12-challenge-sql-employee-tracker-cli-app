DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments(
  id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  dept_name VARCHAR(40)
);

CREATE TABLE roles(
  id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  title VARCHAR(30),
  salary INTEGER,
  department_id INTEGER REFERENCES departments(id)
);

CREATE TABLE employees(
  id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER REFERENCES roles(id),
  manager VARCHAR(30)
);


