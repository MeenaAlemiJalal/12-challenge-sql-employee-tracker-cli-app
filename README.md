# 12 SQL: Employee Tracker App
Employee Management app manages a company's employee database, using Node.js, Inquirer, and MySQL via command line interface

## Database Schema
The database schema is designed as below and in general it contains three tables:

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

## Getting Started
Because this application is not deployed, you’ll need to run it through command line with the following steps:
### 1 - Install all dependecies
Make sure to run `npm install` from the root directory.
### 2 - Create the database
Run mysql from a command line and create a new database called `employee_tracker_db`.
### 3 - Run schema and seeds
If running this app for the first time it is neccessary to run the schema.sql and seeds.sql files first so you have at least some data.
To run the schema and seeds files, run mysql from a terminal window and then run `source ./db/schema.sql` and then `source ./db/seeds.sql`.
### 4 - Update server.js file with your db credentials
Inside server.js file update the createConnection functions with approperiate db creds
```const db = await mysql.createConnection(
      {
        host: 'localhost',
        user: 'root', <this is the db user>
        password: '12345', <your password here>
        database: 'employee_tracker_db' <this is the db you created in step 2>
      },
    );
```
### 5 - Run the app
From a command line window run the application from the root folder by running `node server.js`

## Screenshots




- - -
© 2021 Meena Alemi Jalal. All Rights Reserved.
