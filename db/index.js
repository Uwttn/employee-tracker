const pool = require('./connection');

class DB {
  constructor() {}

  async query(sql, args = []) {
    const client = await pool.connect();
    try {
      const result = await client.query(sql, args);
      return result;
    } finally {
      client.release();
    }
  }

  findAllDepartments() {
    return this.query('SELECT * FROM department;');
  }
  findAllRoles() {
   return this.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;');
  }
  findAllEmployees() {
    return this.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
  }
  addDepartment(department) {
    return this.query('INSERT INTO department (name) VALUES ($1);', [
      JSON.stringify(department.name)
    ]);
  }
  addRole(roleName) {
    const { title, salary, department_id } = roleName;
    return this.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
  }
  addEmployee(employeeName) {
    const { first_name, last_name, role_id, manager_id } = employeeName;
    return this.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      [first_name, last_name, role_id, manager_id]
    );
  }
}

module.exports = new DB();

