const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contrasena_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idRol: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fecha_registro: {
    type: DataTypes.DATEONLY,
  },
  estado: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'Usuario',
});

module.exports = Usuario;
