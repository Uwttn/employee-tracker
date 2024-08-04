const inquirer = require('inquirer');
const db = require('./db/index');

async function main() {
    try {
        const res = await inquirer.prompt([
            {
                type: "list",
                message: "Choose from the options below.",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "quit"],
                name: "options",
            }
        ]);

        const options = res.options;

        switch (options) {

            case 'view all departments':
                const departments = await db.findAllDepartments();
                console.table(departments.rows);
                break;

            case 'view all roles':
                const roles = await db.findAllRoles();
                console.table(roles.rows);
                break;

            case 'view all employees':
                const employees = await db.findAllEmployees();
                console.table(employees.rows);
                break;

            case 'add a department':
                await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'enter the department name',
                    },
                ])
                .then((department) => {
                    db.addDepartment(department)
                    console.log(`${department.name} was added to the database`)
                })
            break;

            case 'add a role':
                await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'enter the new role'
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'enter the salary'
                    },
                    {
                        type: 'list',
                        name: 'department_id',
                        message: 'enter department id',
                        choices: [101, 102, 103, 104, 105, 106, 107],
                    },
                ])
                    .then((role) => {
                        db.addRole(role)
                        console.log(`${role.title} was added to the database`)
                    })
                break;
                
            // case 'add an employee':
            //         await inquirer.prompt ([
            //             {
            //             type: 'input',
            //             name: 'first_name',
            //             message: 'enter first name:'
            //             },
            //             {
            //             type: 'input',
            //             name: 'last_name',
            //             message: 'enter last name',
            //             },
            //             {
            //             type: 'list',
            //             name: 'department_id',
            //             message: 'enter department id',
            //             choices: [101, 102, 103, 104, 105, 106, 107],
            //             },
            //         ])


                default:
                console.log('Invalid option');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
