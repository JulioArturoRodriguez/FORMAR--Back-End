import * as ProductoService from '../services/productos.service.js';
import { validateProducto } from '../validations/productos.validation.js';

export const getAll = async (req, res) => {
  const productos = await ProductoService.getAll();
  res.json(productos);
};

export const getOne = async (req, res) => {
  const producto = await ProductoService.getById(req.params.id);
  if (!producto) return res.status(404).json({ error: 'No encontrado' });
  res.json(producto);
};

export const create = async (req, res) => {
  const error = validateProducto(req.body);
  if (error) return res.status(400).json({ error });

  await ProductoService.create(req.body);
  res.status(201).json({ message: 'Producto creado' });
};

export const update = async (req, res) => {
  const error = validateProducto(req.body);
  if (error) return res.status(400).json({ error });

  await ProductoService.update(req.params.id, req.body);
  res.json({ message: 'Producto actualizado' });
};

export const remove = async (req, res) => {
  await ProductoService.remove(req.params.id);
  res.json({ message: 'Producto eliminado' });
};
