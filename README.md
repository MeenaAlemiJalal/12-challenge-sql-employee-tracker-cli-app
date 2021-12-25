# 12 SQL: Employee Tracker App
Employee Management app manages a company's employee database, using Node.js, Inquirer, and MySQL via command line interface

## Database Schema
The database schema is designed as below. In general the schema contains the following three tables:

* department
  ```
  id: INT PRIMARY KEY
  name: VARCHAR(30) to hold department name
  ```

* role
  ```
  id: INT PRIMARY KEY
  title: VARCHAR(30)` to hold role title
  salary: DECIMAL to hold role salary
  department_id: INT to hold reference to department role belongs to
  ```

* employee
  ```
  id: INT PRIMARY KEY
  first_name: VARCHAR(30) to hold employee first name
  last_name: VARCHAR(30) to hold employee last name
  role_id: INT to hold reference to employee role
  manager_id: INT to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)
  ```

## Geting Started
Because this application is not deployed, you’ll need to run it through command line with the following steps

- - -
© 2021 Meena Alemi Jalal. All Rights Reserved.
