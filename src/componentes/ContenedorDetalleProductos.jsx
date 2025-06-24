import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetalleProducto from './DetalleProducto';

const productos = [
  { id: '1', nombre: 'Auriculares', categoria: 'electronica', precio: 100, descripcion: 'Auriculares inalámbricos', imagen: 'Entrega1\src\assets\Auriculares.jpg' },
  { id: '2', nombre: 'Remera', categoria: 'ropa', precio: 30, descripcion: 'Remera de algodón', imagen: 'Entrega1\src\assets\Remera.jpg' },
  { id: '3', nombre: 'Mochila', categoria: 'accesorios', precio: 50, descripcion: 'Mochila escolar', imagen: 'Entrega1\src\assets\Mochila.jpg' },
];

const obtenerProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos.find(p => p.id === id)), 1000);
  });
};

const ContenedorDetalleProducto = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    obtenerProducto(productoId).then(setProducto);
  }, [productoId]);

  return producto ? <DetalleProducto producto={producto} /> : <p>Cargando...</p>;
};

export default ContenedorDetalleProducto;