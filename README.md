@project("API REST - Gestión de Productos")

@badge(node)
@badge(express)
@badge(sqlite)
@badge(open-source)
@badge(makarow)

@description
Esta API REST permite gestionar productos de un inventario. Está construida con **Node.js**, **Express**, y utiliza **SQLite** como base de datos. Incluye validaciones, manejo de errores, y logs centralizados mediante **Winston**. Ideal para pequeñas tiendas, comercios o entornos educativos.

## Funcionalidades

### 1. Gestión de Productos

#### **Obtener todos los productos**
- **Ruta**: `GET /productos`
- **Descripción**: Devuelve todos los productos registrados.
- **Controlador**: `obtenerTodosLosProductosController`

#### **Obtener producto por ID**
- **Ruta**: `GET /productos/:id`
- **Descripción**: Devuelve un producto según su ID.
- **Controlador**: `obtenerProductoPorIdController`

#### **Agregar un nuevo producto**
- **Ruta**: `POST /productos`
- **Descripción**: Crea un nuevo producto.
- **Validaciones**:
  - `nombre`: Requerido.
  - `precio`: Debe ser un número > 0.
  - `descripcion`: Requerido.
  - `stock`: Número entero >= 0.
  - `ventas`: Número entero >= 0.
  - `fecha_de_ingreso`: Fecha válida.
  - `fecha_de_salida`: Fecha válida.
  - `vendedor`: Requerido.
  - `categoria`: Debe ser una categoría válida.
- **Controlador**: `crearProductoController`

#### **Actualizar un producto**
- **Ruta**: `PUT /productos/:id`
- **Descripción**: Actualiza los datos de un producto existente.
- **Controlador**: `actualizarProductoController`

#### **Eliminar un producto**
- **Ruta**: `DELETE /productos/:id`
- **Descripción**: Elimina un producto por su ID.
- **Controlador**: `eliminarProductoController`

---

### 2. Validaciones

Validaciones implementadas mediante middleware:

- Todos los campos son obligatorios.
- `categoria` debe ser una de las siguientes:
  - `frutas`, `verduras`, `lácteos`, `carnes`, `panadería`, `bebidas`, `otros`
- `precio`, `stock` y `ventas` deben ser valores numéricos válidos.

---

### 3. Logger

Sistema de logs implementado con **Winston** y rotación diaria:

- Logs almacenados en `/logs`:
  - `combined.log`
  - `error.log`
- Logging en consola habilitado en modo desarrollo (`NODE_ENV=development`)
- Soporte para niveles de log: `info`, `error`, etc.

---

## Requisitos

Antes de ejecutar este proyecto, asegurate de tener:

- **Node.js v18+**
- **npm**
- **SQLite3**
- Dependencias (se instalan con `npm install`)

---

/project-root
├── /config
│   ├── config.js              # Configuración general: logger (Winston), variables de entorno (.env), y niveles de log
│   └── port.js                # Determina el puerto de ejecución según el entorno (desarrollo o producción)
│
├── /controller
│   └── productos_controller.js # Lógica de control para productos: recibe peticiones, valida datos y delega al service
│
├── /services
│   └── productos_service.js    # Contiene la lógica de negocio pura: operaciones sobre la base de datos, cálculos, reglas
│
├── /model
│   └── productos_model.js      # Acceso directo a la base de datos SQLite (consultas SQL parametrizadas)
│
├── /routes
│   └── productos.js            # Define las rutas de la API REST y conecta cada una con su controlador correspondiente
│
├── /validators
│   └── productos_validacion.js # Middleware de validación: asegura que los datos enviados al servidor sean válidos
│
├── /logs
│   ├── combined.log            # Registro de eventos generales (info, warnings)
│   └── error.log               # Registro exclusivo de errores y fallos de la aplicación
│
├── base-de-datos.db           # Base de datos SQLite3 que contiene los productos persistidos
├── db.js                      # Inicialización y conexión con SQLite. Ejecuta migraciones o creación de tablas si no existen
├── index.js                   # Punto de entrada principal. Monta el servidor, middlewares, rutas, logger y base de datos
├── .env                       # Variables de entorno reales (NO se sube al repositorio)
├── .env.example               # Plantilla de variables de entorno para desarrollo o producción
├── .gitignore                 # Indica qué archivos o carpetas ignorar en control de versiones (Git)
├── package.json               # Archivo que gestiona dependencias, scripts y metadatos del proyecto Node.js
├── README.md.mkr              # Archivo fuente de documentación para Makarow (generará el README.md)
└── README.md                  # Documentación generada automáticamente desde README.md.mkr

