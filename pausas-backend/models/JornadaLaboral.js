const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const JornadaLaboral = sequelize.define('JornadaLaboral', {
  idJornada: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hora_inicio: {
    type: DataTypes.TIME,
  },
  hora_fin: {
    type: DataTypes.TIME,
  },
  hora_almuerzo_inicio: {
    type: DataTypes.TIME,
  },
  hora_almuerzo_fin: {
    type: DataTypes.TIME,
  },
}, {
  tableName: 'JornadaLaboral',
});

module.exports = JornadaLaboral;
