const departmentRelatedQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the nameof the department?',
  }
]

const employeeRelatedQuestions = (roles, managers) => [
  {
    type: 'input',
    name: 'fName',
    message: 'What is the employee\'s first name?',
  },
  {
    type: 'input',
    name: 'lName',
    message: 'What is the employee\'s last name?',
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is the employee\'s role?',
    choices: [...roles],
    filter(val) {
      return val;
    },
  },
  {
    type: 'list',
    name: 'manager',
    message: 'Who is the employee\'s manager?',
    choices: [...managers],
    filter(val) {
      return val;
    },
  },
]

const roleRelatedQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the role?',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the role?',
  },
  {
    type: 'list',
    name: 'option',
    message: 'Which department does the role belong to?',
    choices: ['Engineering', 'Finance', 'Legal', 'Sales', 'Service'],
    filter(val) {
      return val.toLowerCase();
    },
  },
]
const employeeRoleUdateQuestions = [
  {
    type: 'list',
    name: 'option',
    message: 'Which employee\'s role do you want to update?',
    choices: ['Ajmal', 'Jalal'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'list',
    name: 'option',
    message: 'Which role do you want to assign to the select employee?',
    choices: ['Sales Lead', 'Sales Person'],
    filter(val) {
      return val.toLowerCase();
    },
  },

]

const menuRelatedOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
    filter(val) {
      return val.toLowerCase();
    },
  },
]

const questions = {
  departmentRelatedQuestions,
  employeeRelatedQuestions,
  roleRelatedQuestions,
  employeeRoleUdateQuestions,
  menuRelatedOptions
}

module.exports = questions