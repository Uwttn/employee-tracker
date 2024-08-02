// This is to link to database

const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Department = sequelize.define('department', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

module.exports = Department;