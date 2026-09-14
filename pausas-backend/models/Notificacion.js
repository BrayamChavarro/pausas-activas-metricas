const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Notificacion = sequelize.define('Notificacion', {
  idNotificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idPausa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hora_envio: {
    type: DataTypes.DATE, // datetime
  },
  estado_envio: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'Notificacion',
});

module.exports = Notificacion;
