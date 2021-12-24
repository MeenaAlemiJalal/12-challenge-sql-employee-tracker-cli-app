class EmployeeTracker {
  static async getEmployees(db){
      const query = db.format(`
        SELECT 
        employees.id as id, 
        first_name as firstName, 
        last_name as lastName, 
        title, salary, 
        dept_name as department, 
        manager
        FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id
      `)
      // Query database
      const [employees] = await db.query(query)
      return employees
  }
  static async getDepartments(db){
    const sqlQuery = db.format(`
    SELECT 
        id,
        dept_name as name 
        FROM departments
    `);
    // Query database
    const [deparments] = await db.query(sqlQuery)
    return deparments
  }

  static async getRoles(db){
    const sqlQuery = db.format(`
    SELECT 
      roles.id,  
      title, 
      dept_name as department,
      salary
      FROM roles JOIN departments ON roles.department_id = departments.id
    `);
    // Query database
    const [roles] = await db.query(sqlQuery)
    return roles
  }

  static async addEmployee(db, employee){
    const roleIdQuery = db.format(`SELECT id FROM roles WHERE roles.title = '${employee.role}'`);
    const [roleId] = await db.query(roleIdQuery);
    const sqlQuery = db.format(`
    INSERT INTO 
      employees  
    VALUES 
      (NULL, '${employee.fName}', '${employee.lName}', ${roleId[0].id}, '${employee.manager}')
    `);
    // Query database
    await db.query(sqlQuery)
  }
}

module.exports = EmployeeTracker