import * as productosModel from '../model/productos_model.js';

export const getAll = () => productosModel.findall();
export const getById = (id) => productosModel.findById(id);
export const create = (producto) => productosModel.create(producto);
export const update = (id, producto) => productosModel.update(id, producto);
export const remove = (id) => productosModel.remove(id);
