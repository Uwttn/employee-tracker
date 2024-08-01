const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "list",
            message: "Choose from the options below.",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
            name: "options",
        }
    ])

    .then((response) => 
        console.log(`You responded!`)
    );