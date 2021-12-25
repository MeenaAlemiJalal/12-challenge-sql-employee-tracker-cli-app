/*
/
/ All SQL queries for different type of CRUD operations on the db
/
*/
const getEmployeesQuery =(db) => {
  return db.format(`
  SELECT 
  employees.id as id, 
  first_name as firstName, 
  last_name as lastName, 
  title, salary, 
  dept_name as department, 
  manager
  FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id
`);
}

const addEmployeeQuery =(db, employee, roleId) => {
  return db.format(`
    INSERT INTO employees  
    VALUES (NULL, '${employee.fName}', '${employee.lName}', ${roleId[0].id}, '${employee.manager}')
  `);
}

const updateEmployeeRoleQuery = (db, roleId, employee) => {
  const name = employee.name.split(' ')
  const firstName = name[0]
  const lastName = name[1]
  return db.format(`UPDATE employees SET role_id = ${roleId[0].id} WHERE employees.first_name = '${firstName}' AND employees.last_name = '${lastName}'`)
}

const getDepartmentsQuery = (db) => {
  return db.format(`
  SELECT 
      id,
      dept_name as name 
      FROM departments
  `);
}

const addDepartmentQuery = (db, department) => {
  return db.format(`
  INSERT INTO 
    departments  
  VALUES 
    (NULL, '${department.name}')
  `);
}

const getDepartmentIdForRoleQuery = (db, role) => {
  return db.format(`SELECT id FROM departments WHERE departments.dept_name = '${role.department}'`);
}

const getRolesQuery = (db) => {
  return db.format(`
  SELECT 
    roles.id,  
    title, 
    dept_name as department,
    salary
    FROM roles JOIN departments ON roles.department_id = departments.id
  `);
}

const getRoleIdQuery = (db, employee) => {
  return db.format(`SELECT id FROM roles WHERE roles.title = '${employee.role}'`);
}

const addRoleQuery = (db, role, departmentId) => {
  return db.format(`
  INSERT INTO 
    roles  
  VALUES 
    (NULL, '${role.title}', ${role.salary}, ${departmentId[0].id})
  `);
}

module.exports = {
  getEmployeesQuery,
  addEmployeeQuery,
  updateEmployeeRoleQuery,
  getDepartmentsQuery,
  addDepartmentQuery,
  getDepartmentIdForRoleQuery,
  getRolesQuery,
  addRoleQuery,
  getRoleIdQuery
}
