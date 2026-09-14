const sequelize = require('../config/db');

const Rol = require('./Rol');
const Area = require('./Area');
const Usuario = require('./Usuario');
const JornadaLaboral = require('./JornadaLaboral');
const Rutina = require('./Rutina');
const PausaProgramada = require('./PausaProgramada');
const RegistroPausa = require('./RegistroPausa');
const Notificacion = require('./Notificacion');
const Alerta = require('./Alerta');

// ---- Relaciones (1 -> N), tal como en el diagrama ----

// Rol (1) -> Usuario (N)
Rol.hasMany(Usuario, { foreignKey: 'idRol' });
Usuario.belongsTo(Rol, { foreignKey: 'idRol' });

// Area (1) -> Usuario (N)
Area.hasMany(Usuario, { foreignKey: 'idArea' });
Usuario.belongsTo(Area, { foreignKey: 'idArea' });

// Usuario (1) -> JornadaLaboral (N)
Usuario.hasMany(JornadaLaboral, { foreignKey: 'idUsuario' });
JornadaLaboral.belongsTo(Usuario, { foreignKey: 'idUsuario' });

// Usuario (1) -> PausaProgramada (N)
Usuario.hasMany(PausaProgramada, { foreignKey: 'idUsuario' });
PausaProgramada.belongsTo(Usuario, { foreignKey: 'idUsuario' });

// Rutina (1) -> PausaProgramada (N)
Rutina.hasMany(PausaProgramada, { foreignKey: 'idRutina' });
PausaProgramada.belongsTo(Rutina, { foreignKey: 'idRutina' });

// PausaProgramada (1) -> RegistroPausa (N)
PausaProgramada.hasMany(RegistroPausa, { foreignKey: 'idPausa' });
RegistroPausa.belongsTo(PausaProgramada, { foreignKey: 'idPausa' });

// Usuario (1) -> RegistroPausa (N)
Usuario.hasMany(RegistroPausa, { foreignKey: 'idUsuario' });
RegistroPausa.belongsTo(Usuario, { foreignKey: 'idUsuario' });

// PausaProgramada (1) -> Notificacion (N)
PausaProgramada.hasMany(Notificacion, { foreignKey: 'idPausa' });
Notificacion.belongsTo(PausaProgramada, { foreignKey: 'idPausa' });

// Usuario (1) -> Alerta (N)
Usuario.hasMany(Alerta, { foreignKey: 'idUsuario' });
Alerta.belongsTo(Usuario, { foreignKey: 'idUsuario' });

module.exports = {
  sequelize,
  Rol,
  Area,
  Usuario,
  JornadaLaboral,
  Rutina,
  PausaProgramada,
  RegistroPausa,
  Notificacion,
  Alerta,
};
