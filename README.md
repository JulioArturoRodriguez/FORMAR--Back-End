
"API REST - Gestión de Productos"

(node) 
(express) 
(sqlite) 

(makarow) 

@description
Esta API REST permite gestionar productos de un inventario. Está construida con **Node.js**, **Express**, y utiliza **SQLite** como base de datos. Incluye validaciones, manejo de errores, y logs centralizados mediante **Winston**. Ideal para pequeñas tiendas, comercios o entornos educativos.

---

## 🚀 Funcionalidades

### 📦 1. Gestión de Productos

#### 📄 Obtener todos los productos
- **Ruta**: `GET /productos`
- **Descripción**: Devuelve todos los productos registrados.
- **Controlador**: `obtenerTodosLosProductosController`

#### 🔍 Obtener producto por ID
- **Ruta**: `GET /productos/:id`
- **Descripción**: Devuelve un producto según su ID.
- **Controlador**: `obtenerProductoPorIdController`

#### ➕ Agregar un nuevo producto
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

#### ♻️ Actualizar un producto
- **Ruta**: `PUT /productos/:id`
- **Descripción**: Actualiza los datos de un producto existente.
- **Controlador**: `actualizarProductoController`

#### ❌ Eliminar un producto
- **Ruta**: `DELETE /productos/:id`
- **Descripción**: Elimina un producto por su ID.
- **Controlador**: `eliminarProductoController`

 

### ✅ 2. Validaciones

Validaciones implementadas mediante middleware:

- Todos los campos son obligatorios.
- `categoria` debe ser una de las siguientes:
  - `frutas`, `verduras`, `lácteos`, `carnes`, `panadería`, `bebidas`, `otros`
- `precio`, `stock` y `ventas` deben ser valores numéricos válidos.

---

### 🪵 3. Logger

Sistema de logs implementado con **Winston** y rotación diaria:

- Logs almacenados en `/logs`:
  - `combined.log`
  - `error.log`
- Logging en consola habilitado en modo desarrollo (`NODE_ENV=development`)
- Soporte para niveles de log: `info`, `error`, entre otros.

---

## 📦 Tecnologías Utilizadas

| Tecnología   | Descripción                                     |
|--------------|-------------------------------------------------|
| Node.js      | Entorno de ejecución JavaScript en el backend. |
| Express.js   | Framework web para construir APIs REST.         |
| SQLite       | Base de datos liviana y embebida.               |
| Winston      | Sistema de logging profesional.                 |
| Makarow      | Generador de documentación automatizada.        |

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado:

- **Node.js v18+**
- **npm**
- **SQLite3** (cliente de línea de comandos o SQLite Browser)

---


/project-root
├── /dist                          # Archivos compilados o distribución (build)
│
├── /config
│   ├── config.js                  # Archivo de configuración general
│   └── port.js                   # Configuración del puerto
│
├── /controller
│   └── productos_controller.js   # Controlador para productos
│
├── /logs                         # Carpeta para logs
│   ├── combined.log              # Logs combinados
│   └── error.log                 # Logs de error
│
├── /model
│   └── productos_model.js        # Modelo de productos
│
├── /node_modules                 # Dependencias instaladas por npm
│
├── /routes
│   └── productos.js              # Rutas para productos
│
├── /services
│   └── productos_service.js      # Lógica de negocio para productos
│
├── /validators
│   └── productos_validacion.js  # Validaciones para productos
│
├── .gitignore                   # Archivos/carpetas ignoradas por Git
├── base-de-dados.db             # Base de datos SQLite
├── db.js                       # Archivo de conexión o configuración DB
├── index.js                    # Entrada principal de la aplicación
├── package-lock.json           # Lockfile de dependencias npm
├── package.json                # Archivo con dependencias y scripts npm
