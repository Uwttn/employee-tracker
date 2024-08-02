// This is to link to database

const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        unique: true,
    },
    department_id: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        unique: true,
    },
});

module.exports = Role;