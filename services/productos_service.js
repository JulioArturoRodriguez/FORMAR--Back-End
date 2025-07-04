export const getall = () => produtosModel.findall();
export const getById = (id) => produtosModel.findById(id);

export const create = (producto) => produtosModel.create(producto);

export const update = (id, producto) => produtosModel.update(id, producto);

export const remove = (id) => produtosModel.remove(id);

