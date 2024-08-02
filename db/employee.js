// This is to link to database

const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Employee = sequelize.define('employee', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Employee;