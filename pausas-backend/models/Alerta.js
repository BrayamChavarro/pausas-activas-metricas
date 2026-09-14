const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Alerta = sequelize.define('Alerta', {
  idAlerta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  fecha_generacion: {
    type: DataTypes.DATE, // datetime
  },
}, {
  tableName: 'Alerta',
});

module.exports = Alerta;
