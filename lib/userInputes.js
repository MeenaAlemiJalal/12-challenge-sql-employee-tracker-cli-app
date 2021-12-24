const inquirer = require('inquirer')
const EmployeeTracker = require('./employeeTracker');
require('console.table');
const Questions = require('./questions')

const questions = {
  department: Questions.departmentRelatedQuestions,
  employee: Questions.employeeRelatedQuestions,
  role: Questions.roleRelatedQuestions,
  updateEmployeeRole: Questions.updateEmployeeRole,
  menu: Questions.menuRelatedOptions
}

async function runQuery(type, roles, managers) {
  const relatedQuestions = type === 'employee' ? questions[type](roles, managers) : questions[type]
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


const runAllQueries = async (db) => {
  let employees = await EmployeeTracker.getEmployees(db)
  let roles = await EmployeeTracker.getRoles(db)
  let employeeNames = getAllEmployeeNames(employees)
  let rolesNames = getRoleTitleAndSalary(roles).rolesNames
  let salaries = getRoleTitleAndSalary(roles).salaries
  let isRunning = true
  while(isRunning) {
    const menu = await runQuery('menu')
    switch(menu.option.toLowerCase()) {
      case 'quit':
        isRunning = false;
        return true
      case 'view all employees':
        employees = await EmployeeTracker.getEmployees(db)
        employeeNames = getAllEmployeeNames(employees)
        console.table(employees)
        break;
      case 'add employee':
        const employee = await runQuery('employee', rolesNames, employeeNames)
        await EmployeeTracker.addEmployee(db, employee)
        console.log(`Added ${employee.fName} ${employee.lName} to the database`)
        break;
      case 'update employee role':
        break;
      case 'view all roles':
        roles = await EmployeeTracker.getRoles(db)
        rolesNames = getRoleTitleAndSalary(roles).rolesNames
        salaries = getRoleTitleAndSalary(roles).salaries
        console.table(roles)
        break;
      case 'add role':
        break;
      case 'view all departments':
        const deparments = await EmployeeTracker.getDepartments(db)
        console.table(deparments)
        break;
      case 'add department':
        break;
      default:
        break;
    }
  }
}

module.exports = runAllQueries