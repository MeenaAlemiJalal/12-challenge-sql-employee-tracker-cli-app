const allQueries = require('./queries')

// EmployeeManager handles all CRUD ops on the db
class EmployeeManager {

  // get all employees
  static async getEmployees(db) {
    // A query string for getEmployees
    const query = allQueries.getEmployeesQuery(db)
    // Query database
    const [employees] = await db.query(query)
    return employees
  }

  // get all departments
  static async getDepartments(db) {
    // A query string for getDepartments
    const query = allQueries.getDepartmentsQuery(db)
    // Query database
    const [deparments] = await db.query(query)
    return deparments
  }

  // get all roles
  static async getRoles(db) {
    // A query string for getRoles
    const query = allQueries.getRolesQuery(db)
    // Query database
    const [roles] = await db.query(query)
    return roles
  }

  // add a new employee
  static async addEmployee(db, employee) {
    // A query string for the role id that needs to be assigned to the new employee
    const roleIdQuery = allQueries.getRoleIdQuery(db, employee);
    // Get the role id that needs to be assigned to the new employee
    const [roleId] = await db.query(roleIdQuery);
     // A query string for addEmployee
    const query = allQueries.addEmployeeQuery(db, employee, roleId)
    // Query database
    await db.query(query)
  }

  // update one employee's role
  static async updateEmployeeRole(db, employee) {
    // A query string for the role id that needs to set as updated for the selected employee
    const roleIdQuery = allQueries.getRoleIdQuery(db, employee)
    // Get the role id that needs to be assigned to the employee
    const [roleId] = await db.query(roleIdQuery)
    // A query string for updateEmpoyeeRole
    const query = allQueries.updateEmployeeRoleQuery(db, roleId, employee)
    // Query database
    await db.query(query)
  }

  // add one department
  static async addDepartment(db, department) {
    // A query string for addDepartment
    const query = allQueries.addDepartmentQuery(db, department)
    // Query database
    await db.query(query)
  }

  // add one role
  static async addRole(db, role) {
    // A query for the id for a department that needs to be assigned to the new role
    const departmentIdQuery = allQueries.getDepartmentIdForRoleQuery(db, role);
    // get the department id
    const [departmentId] = await db.query(departmentIdQuery);
    // A query string for addRole
    const query = allQueries.addRoleQuery(db, role, departmentId)
    // Query database
    await db.query(query)
  }
}

module.exports = EmployeeManager