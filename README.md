# 12 SQL: Employee Tracker App

Employee Management app manages a company's employee database, using Node.js, Inquirer, and MySQL via command line interface

Because this application is not deployed, you’ll need to run it through command line with the following steps


## Database Schema

The database schema is designed as below. In general the schema contains the following three tables:

* department
```
  id: INT PRIMARY KEY

  name: VARCHAR(30) to hold department name
```

* `role`

  * `id`: `INT PRIMARY KEY`

  * `title`: `VARCHAR(30)` to hold role title

  * `salary`: `DECIMAL` to hold role salary

  * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

  * `id`: `INT PRIMARY KEY`

  * `first_name`: `VARCHAR(30)` to hold employee first name

  * `last_name`: `VARCHAR(30)` to hold employee last name

  * `role_id`: `INT` to hold reference to employee role

  * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
