import * as ProductoService from '../services/productos_service.js';
import { validateProducto } from '../validators/productos_validacion.js';

export const getAll = async (req, res) => {
  try {
    const productos = await ProductoService.getAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getOne = async (req, res) => {
  try {
    const producto = await ProductoService.getById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'No encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar producto' });
  }
};

export const create = async (req, res) => {
  try {
    const error = validateProducto(req.body);
    if (error) return res.status(400).json({ error });

    await ProductoService.create(req.body);
    res.status(201).json({ message: 'Producto creado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

export const update = async (req, res) => {
  try {
    const error = validateProducto(req.body);
    if (error) return res.status(400).json({ error });

    await ProductoService.update(req.params.id, req.body);
    res.json({ message: 'Producto actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

export const remove = async (req, res) => {
  try {
    await ProductoService.remove(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
