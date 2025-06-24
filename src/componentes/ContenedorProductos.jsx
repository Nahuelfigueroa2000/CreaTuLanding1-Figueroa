import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListaProductos from './ListaProductos';

const productos = [
  { id: '1', nombre: 'Auriculares', categoria: 'electronica', precio: 100, imagen: 'Entrega1\src\assets\Auriculares.jpg' },
  { id: '2', nombre: 'Remera', categoria: 'ropa', precio: 30, imagen: 'Entrega1\src\assets\Remera.jpg' },
  { id: '3', nombre: 'Mochila', categoria: 'accesorios', precio: 50, imagen: 'Entrega1\src\assets\Mochila.jpg' },
];

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 1000);
  });
};

const ContenedorProductos = () => {
  const { categoriaId } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    obtenerProductos().then((data) => {
      if (categoriaId) {
        setProductosFiltrados(data.filter(p => p.categoria === categoriaId));
      } else {
        setProductosFiltrados(data);
      }
    });
  }, [categoriaId]);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ListaProductos productos={productosFiltrados} />
    </div>
  );
};

export default ContenedorProductos;