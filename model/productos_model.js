let db;
export const setDb = (database) => {db = db;};

export const findall = async () => await db.all('SELECT * FROM productos'); 

export const findById = async (id) => await db.get('SELECT * FROM productos WHERE ID = ?', [id]);

export const create = async (producto) => {
  const { nombre, precio, descripcion, stock, ventas, fecha_de_ingreso, fecha_de_salida, vendedor, categoria } = producto;
  const result = await db.run(
    'INSERT INTO productos (nombre, precio, descripcion, stock, ventas, fecha_de_ingreso, fecha_de_salida, vendedor, categoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nombre, precio, descripcion, stock, ventas, fecha_de_ingreso, fecha_de_salida, vendedor, categoria]
  );
  return { id: result.lastID };
}   

export const update = async (id, producto) => {
  const { nombre, precio, descripcion, stock, ventas, fecha_de_ingreso, fecha_de_salida, vendedor, categoria } = producto;
  await db.run(
    'UPDATE productos SET nombre = ?, precio = ?, descripcion = ?, stock = ?, ventas = ?, fecha_de_ingreso = ?, fecha_de_salida = ?, vendedor = ?, categoria = ? WHERE ID = ?',
    [nombre, precio, descripcion, stock, ventas, fecha_de_ingreso, fecha_de_salida, vendedor, categoria, id]
  );
  return { id };
}
export const remove = async (id) => {
  await db.run('DELETE FROM productos WHERE ID = ?', [id]);
  return { id };
}