import './App.css'
import BarraNavegacion from './componentes/BarraNavegacion';
import ContenedorProductos from './componentes/ContenedorProductos';


function App() {
  return (
    <>
      <BarraNavegacion />
      <ContenedorProductos mensaje="¡Bienvenido a nuestra tienda en línea!" />
    </>
  );
}

export default App
