const departmentRelatedQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the department?',
  }
]

const employeeRelatedQuestions = (roles, employees) => [
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
    choices: [...employees],
    filter(val) {
      return val;
    },
  },
]

const roleRelatedQuestions = (departments) => [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of the role?',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the role?',
  },
  {
    type: 'list',
    name: 'department',
    message: 'Which department does the role belong to?',
    choices: [...departments],
    filter(val) {
      return val;
    },
  },
]
const employeeRoleUdateQuestions = (roles, employees) =>[
  {
    type: 'list',
    name: 'name',
    message: 'Which employee\'s role do you want to update?',
    choices: [...employees],
    filter(val) {
      return val;
    },
  },
  {
    type: 'list',
    name: 'role',
    message: 'Which role do you want to assign to the select employee?',
    choices: [...roles],
    filter(val) {
      return val;
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