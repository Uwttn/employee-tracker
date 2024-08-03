const pool = require('./connection');

class DB {
  constructor() { }

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
   return this.query('SELECT * FROM role;');
  }
  findAllEmployees() {
    return this.query('SELECT * FROM employee;');
  }
  addDepartment(department) {
    return this.query('INSERT INTO department (name) VALUES ($1)', [
      department.name
    ]);
  }
  addRole(roleName) {
    const { title, salary, department_id } = roleName;
    return this.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
  }
}

module.exports = new DB();