// This is to prompt the initial questions
const { prompt } = require('inquirer');
const db = require('./db');

main()

function main() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "Choose from the options below.",
            choices: [
                {
                    name: "view all departments",
                    value: "VIEW_ALL_DEPARTMENTS",
                },
                {
                    name: "view all roles",
                    value: "VIEW_ALL_ROLES",
                },
                {
                    name: "view all employees",
                    value: "VIEW_ALL_EMPLOYEES",
                },
                // "view all employees", "add a department", "add a role", "add an employee", "update an employee role"
            ],
        },
    ])

        .then((res) => {
            let choice = res.choice;
            switch (choice) {
                case "VIEW_ALL_DEPARTMENTS":
                    viewAllDepartments();
                    break;
                case "VIEW_ALL_ROLES":
                    viewAllRoles();
                    break;
                    case "VIEW_ALL_EMPLOYEES":
                    viewAllEmployees();
                    break;
                default:
                    quit();
            }
        });
}

function viewAllDepartments() {
    db.findAllDepartments()
        .then(({ rows }) => {
            let department = rows;
            console.log("\n");
            console.table(department);
        })
        .then(() => main());
}

function viewAllRoles() {
    db.findAllRoles()
        .then(({ rows }) => {
            let role = rows;
            console.log("\n");
            console.table(role);
        })
        .then(() => main());
}

function viewAllEmployees() {
    db.findAllEmployees()
        .then(({ rows }) => {
            let role = rows;
            console.log("\n");
            console.table(role);
        })
        .then(() => main());
}

function quit() {
    console.log("Bye bye");
    process.exit();
}
