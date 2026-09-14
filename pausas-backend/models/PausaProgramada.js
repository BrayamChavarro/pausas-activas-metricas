const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PausaProgramada = sequelize.define('PausaProgramada', {
  idPausa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idRutina: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hora_programada: {
    type: DataTypes.TIME,
  },
  duracion_minutos: {
    type: DataTypes.INTEGER,
  },
  estado: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'PausaProgramada',
});

module.exports = PausaProgramada;
