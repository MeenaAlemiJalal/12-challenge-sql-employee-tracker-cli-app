INSERT INTO departments (dept_name)
VALUES 
  ("Egnineering"),
  ("Finance"),
  ("Legal"),
  ("Service"),
  ("Sales");

INSERT INTO roles (title, salary, department_id) 
VALUES
  ("Sales Lead", 10000, 4),
  ("Salesperson", 8000, 4),
  ("Engineer", 12000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager) 
VALUES 
  ("John", "Dov", 2, 'Bob Tome'),
  ("Bob", "Tome", 1, 'John Dov');