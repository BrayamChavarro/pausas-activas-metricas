require('dotenv').config();
const express = require('express');
const cors = require('cors');

const sequelize = require('./config/db');
require('./models'); // registra los modelos y sus relaciones
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Pausas Activas funcionando correctamente' });
});

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

    // sync({ alter: true }) crea/ajusta las tablas según los modelos.
    // Quítalo o cámbialo si prefieres manejar las migraciones tú mismo.
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados con la base de datos.');

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error.message);
    process.exit(1);
  }
}

start();
