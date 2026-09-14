const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rutina = sequelize.define('Rutina', {
  idRutina: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  duracion_estimada: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'Rutina',
});

module.exports = Rutina;
