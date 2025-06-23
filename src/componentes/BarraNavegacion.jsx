import Carrito from './Carrito';

const BarraNavegacion = () => {
  return (
    <nav>
      <div><strong>MiTienda</strong></div>
      <div>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>
      <Carrito />
    </nav>
  );
};

export default BarraNavegacion;