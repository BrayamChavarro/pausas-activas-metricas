// Genera un controlador CRUD estándar (getAll, getById, create, update, remove)
// para cualquier modelo de Sequelize que le pases.
// primaryKey: nombre del campo de llave primaria de ese modelo (ej: 'idUsuario')

function createController(model, primaryKey) {
  return {
    async getAll(req, res) {
      try {
        const items = await model.findAll();
        res.json(items);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    async getById(req, res) {
      try {
        const item = await model.findByPk(req.params.id);
        if (!item) {
          return res.status(404).json({ error: 'Registro no encontrado' });
        }
        res.json(item);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    async create(req, res) {
      try {
        const newItem = await model.create(req.body);
        res.status(201).json(newItem);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

    async update(req, res) {
      try {
        const item = await model.findByPk(req.params.id);
        if (!item) {
          return res.status(404).json({ error: 'Registro no encontrado' });
        }
        await item.update(req.body);
        res.json(item);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

    async remove(req, res) {
      try {
        const item = await model.findByPk(req.params.id);
        if (!item) {
          return res.status(404).json({ error: 'Registro no encontrado' });
        }
        await item.destroy();
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  };
}

module.exports = createController;
