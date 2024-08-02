// This is to prompt the initial questions
const inquirer = require('inquirer');
const sequelize = require('./config/connection');
require('dotenv').config();

inquirer
    .prompt([
        {
            type: "list",
            message: "Choose from the options below.",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
            name: "options",
        }
    ])

// I want to view the departments table
// retrieves department table
const Department = require('./db/department');
const department = Department.findAll();

// retrieves role table
const Role = require('./db/role');
const role = Role.findAll();

// retrieves employee table
const Employee = require('./db/employee');
const employee = Employee.findAll();


.then(({options}) => {
    if (options === 'view all departments') {
        // Get data from department table
        console.table(department);
    } else if (options === 'view all roles') {
        // get data from role table
        console.table(role);
    } else if (options === 'view all employees') {
        // get data from employee table
        console.table(employee);
    } else {
        return;
    }
});
