require('dotenv').config();
const { Sequelize } = require('sequelize');

// Conexión a MySQL usando variables de entorno (ver .env.example)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false, // pon esto en console.log si quieres ver las queries SQL
    define: {
      timestamps: false, // las tablas del modelo no tienen createdAt/updatedAt
      freezeTableName: true,
    },
  }
);

module.exports = sequelize;
