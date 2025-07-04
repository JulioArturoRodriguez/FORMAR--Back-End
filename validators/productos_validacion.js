
export const validateProducto = (data) => {
const requerido = [ 'nombre', 'precio', 'descripcion', 'stock', 'ventas', 'fecha_de_ingreso', 'fecha_de_salida', 'vendedor', 'categoria' ];
    const areas = [ 'lacteos', 'carnes', 'verduras', 'frutas', 'panaderia', 'conservas', 'bebidas'  ];
   


for (let field of requiredo) {
    if (!data[field]) {
      return `El campo "${field}" es obligatorio`;
    }
  }

  if (!areas.includes(data.area)) {
    return `El área "${data.area}" no es válida`;
  }

  return null;
};