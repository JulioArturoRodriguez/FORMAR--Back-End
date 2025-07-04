import  { Router } from 'express';
import * as productosController from '../controllers/productos_controller.js';
const router = Router();

// Rutas para productos
router.get('/', productosController.getAll);
router.get('/:id', productosController.getOne);
router.post('/', productosController.create);
router.put('/:id', productosController.update);
router.delete('/:id', productosController.remove);

// Exportar el router
export default router;