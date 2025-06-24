import ContadorProducto from './ContadorProducto';

const DetalleProducto = ({ producto }) => {
  return (
    <div className="detalle-producto">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <ContadorProducto />
    </div>
  );
};

export default DetalleProducto;
