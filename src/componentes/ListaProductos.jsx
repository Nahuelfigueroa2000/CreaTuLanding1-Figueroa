import TarjetaProducto from './TarjetaProducto';

const ListaProductos = ({ productos }) => {
  return (
    <div className="lista-productos">
      {productos.map(producto => (
        <TarjetaProducto key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ListaProductos;