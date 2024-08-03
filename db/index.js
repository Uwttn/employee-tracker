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
    return this.query('SELECT department.id, department.name FROM department;');
  }
  findAllRoles() {
   return this.query('SELECT role.id, role.title, role.salary, role.department_id FROM role;');
  }
  findAllEmployees() {
    return this.query('SELECT employee.id, first_name, last_name, role_id, manager_id FROM employee;');
  }
}

module.exports = new DB();