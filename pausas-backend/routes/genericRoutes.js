const express = require('express');

// Crea un router Express con las 5 rutas CRUD estándar para un controlador dado.
function createRouter(controller) {
  const router = express.Router();

  router.get('/', controller.getAll);
  router.get('/:id', controller.getById);
  router.post('/', controller.create);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.remove);

  return router;
}

module.exports = createRouter;
