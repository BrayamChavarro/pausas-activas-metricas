const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Area = sequelize.define('Area', {
  idArea: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Area',
});

module.exports = Area;
