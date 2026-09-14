const express = require('express');
const createController = require('../controllers/genericController');
const createRouter = require('./genericRoutes');

const {
  Rol,
  Area,
  Usuario,
  JornadaLaboral,
  Rutina,
  PausaProgramada,
  RegistroPausa,
  Notificacion,
  Alerta,
} = require('../models');

const router = express.Router();

// Cada entidad obtiene su propio controlador CRUD y su propio router,
// montados bajo un prefijo en /api
router.use('/roles', createRouter(createController(Rol)));
router.use('/areas', createRouter(createController(Area)));
router.use('/usuarios', createRouter(createController(Usuario)));
router.use('/jornadas', createRouter(createController(JornadaLaboral)));
router.use('/rutinas', createRouter(createController(Rutina)));
router.use('/pausas-programadas', createRouter(createController(PausaProgramada)));
router.use('/registros-pausa', createRouter(createController(RegistroPausa)));
router.use('/notificaciones', createRouter(createController(Notificacion)));
router.use('/alertas', createRouter(createController(Alerta)));

module.exports = router;
