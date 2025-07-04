export const validateProducto = (data) => {
  const requerido = ['nombre', 'precio', 'descripcion', 'stock', 'ventas', 'fecha_de_ingreso', 'fecha_de_salida', 'vendedor', 'categoria'];
  const categorias = ['lácteos', 'carnes', 'verduras', 'frutas', 'panadería', 'otros', 'bebidas'];

  for (let field of requerido) {
    if (!data[field]) {
      return `El campo "${field}" es obligatorio`;
    }
  }

  if (!categorias.includes(data.categoria)) {
    return `La categoría "${data.categoria}" no es válida`;
  }

  return null;
};
