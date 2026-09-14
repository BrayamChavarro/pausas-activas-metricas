const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RegistroPausa = sequelize.define('RegistroPausa', {
  idRegistro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idPausa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
  },
  hora_inicio: {
    type: DataTypes.DATE, // datetime
  },
  hora_fin: {
    type: DataTypes.DATE, // datetime
  },
  duracion_real: {
    type: DataTypes.INTEGER,
  },
  estado_cumplimiento: {
    type: DataTypes.STRING,
  },
  modo_no_molestar: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'RegistroPausa',
});

module.exports = RegistroPausa;
