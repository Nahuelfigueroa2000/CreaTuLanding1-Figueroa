import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import BarraNavegacion from './componentes/BarraNavegacion';
import ContenedorProductos from './componentes/ContenedorProductos';
import ContenedorDetalleProducto from './componentes/ContenedorDetalleProductos';


function App() {
  return (
    <BrowserRouter>
    <div className='contenedor-app'>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<ContenedorProductos />} />
        <Route path="/categoria/:categoriaId" element={<ContenedorProductos />} />
        <Route path="/producto/:productoId" element={<ContenedorDetalleProducto />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
