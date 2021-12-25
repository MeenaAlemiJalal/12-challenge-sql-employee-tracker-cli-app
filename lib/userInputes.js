const inquirer = require('inquirer')
require('console.table');
const EmployeeManager = require('./EmployeeManager');
const Questions = require('./questions')

const questions = {
  department: Questions.departmentRelatedQuestions,
  employee: Questions.employeeRelatedQuestions,
  role: Questions.roleRelatedQuestions,
  updateEmployeeRole: Questions.employeeRoleUdateQuestions,
  menu: Questions.menuRelatedOptions
}

async function runQuery(type, roles, employees, departments) {
  let relatedQuestions = type === 'employee' || type === 'updateEmployeeRole' ? questions[type](roles, employees) : questions[type]
  if(type === 'role') {
    relatedQuestions = questions[type](departments)
  }
  return inquirer.prompt(relatedQuestions)
    .then(function (answers) {
      return answers
    })
    .catch(function (err) {
      console.log(chalk.red('Error:'), err)
    })
}

const getRoleTitleAndSalary = (roles) => {
  let rolesNames = []
  let salaries = []
   roles?.length && roles.forEach((role) => {
    rolesNames.push(role.title)
    salaries.push(role.salary)
  })
  return {
    rolesNames,
    salaries
  }
} 

const getAllEmployeeNames = (employees) => {
  return employeeNames = employees.map((employee) => {
    return employee.firstName + ' ' + employee.lastName
  })
}


const getUserInputes = async (db) => {
  let employees = await EmployeeManager.getEmployees(db)
  let roles = await EmployeeManager.getRoles(db)
  let employeeNames = getAllEmployeeNames(employees)
  let rolesNames = getRoleTitleAndSalary(roles).rolesNames
  let isRunning = true
  while(isRunning) {
    const menu = await runQuery('menu')
    switch(menu.option.toLowerCase()) {
      case 'quit':
        isRunning = false;
        break;
      case 'view all employees':
        employees = await EmployeeManager.getEmployees(db)
        employeeNames = getAllEmployeeNames(employees)
        console.table(employees)
        break;
      case 'add employee':
        const employee = await runQuery('employee', rolesNames, employeeNames)
        await EmployeeManager.addEmployee(db, employee)
        console.log(`Added ${employee.fName} ${employee.lName} to the database`)
        break;
      case 'update employee role':
        const updatedEmployee = await runQuery('updateEmployeeRole', rolesNames, employeeNames)
        await EmployeeManager.updateEmployeeRole(db, updatedEmployee)
        console.log(`Updated ${employee.name}'s role in the database`)
        break;
      case 'view all roles':
        roles = await EmployeeManager.getRoles(db)
        rolesNames = getRoleTitleAndSalary(roles).rolesNames
        console.table(roles)
        break;
      case 'add role':
        const allDepartments = await EmployeeManager.getDepartments(db)
        const departmentNames = allDepartments?.map(deparment => {
          return deparment.name
        })
        const newRole = await runQuery('role', null, null, departmentNames)
        await EmployeeManager.addRole(db, newRole)
        console.log(`Added ${newRole.title} to the database`)
        break;
      case 'view all departments':
        const deparments = await EmployeeManager.getDepartments(db)
        console.table(deparments)
        break;
      case 'add department':
        const department = await runQuery('department')
        await EmployeeManager.addDepartment(db, department)
        console.log(`Added ${department.name} to the database`)
      default:
        break;
    }
  }
}

module.exports = getUserInputes