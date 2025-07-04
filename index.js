import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/sqlite.js';
import { setDB } from './models/productos.model.js';
import productosRoutes from './routes/productos.routes.js';
import { notFound } from './middlewares/notFound.middleware.js';
import { logger } from './config/config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/productos', productosRoutes);
app.use(notFound);

async function startServer() {
  try {
    const db = await connectDB();
    setDB(db);

    app.listen(PORT, () => {
      logger.info(`Servidor iniciado en http://localhost:${PORT}`);
    });
  } catch (err) {
    logger.error('Error al iniciar servidor:', err.message);
  }
}

startServer();
export default app; // Export the app for testing or further configuration
export { PORT }; // Export PORT for testing or further configuration