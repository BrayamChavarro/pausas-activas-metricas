# Backend - Sistema de Pausas Activas

Backend en Node.js + Express + Sequelize (MySQL) generado a partir del modelo de datos:
Rol, Area, Usuario, JornadaLaboral, Rutina, PausaProgramada, RegistroPausa, Notificacion, Alerta.

## 1. Instalar dependencias

```bash
npm install
```

## 2. Configurar la base de datos

1. Crea una base de datos MySQL vacía, por ejemplo `pausas_activas`.
2. Copia `.env.example` a `.env` y ajusta los valores con tus credenciales:

```bash
cp .env.example .env
```

## 3. Levantar el servidor

```bash
npm run dev    # con nodemon (recarga automática)
# o
npm start      # producción
```

Al arrancar, Sequelize se conecta a la base de datos y ejecuta `sync({ alter: true })`,
que crea o ajusta automáticamente las 9 tablas según los modelos. Si prefieres no usar
esto en producción (porque puede alterar tablas existentes), cámbialo en `app.js` por
`sequelize.sync()` o quítalo y maneja tú las migraciones.

## Estructura del proyecto

```
pausas-backend/
├── app.js                 # Punto de entrada, conexión y arranque del servidor
├── config/
│   └── db.js               # Configuración de Sequelize (conexión MySQL)
├── models/
│   ├── Rol.js
│   ├── Area.js
│   ├── Usuario.js
│   ├── JornadaLaboral.js
│   ├── Rutina.js
│   ├── PausaProgramada.js
│   ├── RegistroPausa.js
│   ├── Notificacion.js
│   ├── Alerta.js
│   └── index.js            # Define todas las relaciones (FKs) entre modelos
├── controllers/
│   └── genericController.js # CRUD reutilizable (getAll, getById, create, update, remove)
├── routes/
│   ├── genericRoutes.js     # Router CRUD reutilizable
│   └── index.js             # Monta cada entidad en su endpoint bajo /api
├── .env.example
└── package.json
```

## Endpoints disponibles

Cada entidad tiene las mismas 5 rutas CRUD, montadas bajo `/api`:

| Entidad             | Base URL                     |
|---------------------|-------------------------------|
| Rol                 | `/api/roles`                  |
| Area                | `/api/areas`                  |
| Usuario             | `/api/usuarios`                |
| JornadaLaboral      | `/api/jornadas`                |
| Rutina              | `/api/rutinas`                 |
| PausaProgramada     | `/api/pausas-programadas`      |
| RegistroPausa       | `/api/registros-pausa`         |
| Notificacion        | `/api/notificaciones`          |
| Alerta              | `/api/alertas`                 |

Para cada base URL:

- `GET    /`      → listar todos
- `GET    /:id`   → obtener uno por su llave primaria
- `POST   /`      → crear uno nuevo (body en JSON)
- `PUT    /:id`   → actualizar uno existente
- `DELETE /:id`   → eliminar uno

### Ejemplo: crear un usuario

```bash
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Ana Torres",
    "correo": "ana@empresa.com",
    "contrasena_hash": "hash_generado_con_bcrypt",
    "idRol": 1,
    "idArea": 2,
    "fecha_registro": "2026-09-14",
    "estado": "activo"
  }'
```

## Relaciones implementadas (según tu diagrama)

- Rol → Usuario (1:N)
- Area → Usuario (1:N)
- Usuario → JornadaLaboral (1:N)
- Usuario → PausaProgramada (1:N)
- Rutina → PausaProgramada (1:N)
- PausaProgramada → RegistroPausa (1:N)
- Usuario → RegistroPausa (1:N)
- PausaProgramada → Notificacion (1:N)
- Usuario → Alerta (1:N)

## Notas importantes

- **Contraseñas**: `contrasena_hash` se guarda tal cual llegue en el body. Debes
  hashear la contraseña (por ejemplo con `bcrypt`) antes de enviarla al endpoint de
  creación de usuario; este backend no lo hace automáticamente.
- **Validaciones**: el CRUD genérico no valida reglas de negocio (por ejemplo, que
  `idRol` exista antes de crear un `Usuario`). Sequelize sí lanzará error si defines
  las FKs como constraints reales y el valor no existe, pero puedes añadir
  validaciones adicionales en cada controlador si las necesitas.
- **Autenticación**: no se incluye login ni JWT; si lo necesitas, lo puedo agregar
  sobre este mismo backend.
