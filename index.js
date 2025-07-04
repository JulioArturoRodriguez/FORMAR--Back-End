import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import { setDB } from './model/productos_model.js';
import productosRoutes from './routes/productos.js';
import { logger } from './config/config.js';
import PORT from './config/port.js';

const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

app.use(express.json());
app.use('/productos', productosRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const startServer = async () => {
  try {
    const db = await connectDB();
    setDB(db);

    app.listen(PORT, () => {
      logger.info(`Servidor iniciado en http://localhost:${PORT}`);
    });
  } catch (err) {
    logger.error('Error al iniciar el servidor:', {
      message: err.message,
      stack: err.stack
    });
  }
};

startServer();
