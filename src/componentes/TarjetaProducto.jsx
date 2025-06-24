import { Link } from 'react-router-dom';

const TarjetaProducto = ({ producto }) => {
  return (
    <div className="tarjeta-producto">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default TarjetaProducto;