import { Link } from 'react-router-dom';

const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <h1>Tienda Online</h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/categoria/electronica">Electrónica</Link>
        <Link to="/categoria/ropa">Ropa</Link>
        <Link to="/categoria/accesorios">Accesorios</Link>
      </div>
    </nav>
  );
};

export default BarraNavegacion;