# 🛒 CreaTuLanding1 - Simulador de E-commerce en React

Este proyecto es parte de la **Entrega 1 del curso de React.js en Coderhouse**. Consiste en una simulación inicial de un e-commerce, donde se implementa una **landing page** con los primeros componentes básicos de una tienda online.

---

## 🔧 Tecnologías utilizadas

- ⚛️ React.js
- 🖌️ CSS (estilos escritos en `App.css`)
- 📦 Node.js + NPM (para gestionar el entorno React)
- 💻 Visual Studio Code

---

## 📄 Descripción del proyecto

La aplicación simula la estructura básica de una tienda online. Está compuesta por los siguientes componentes:

### 🔹 NavBar
Una barra de navegación que ocupa todo el ancho de la pantalla. Contiene:
- Un **logo de carrito de compras** (`CartWidget`)
- Enlaces de navegación: **Inicio**, **Productos**, y **Contacto**

### 🔹 ItemListContainer
Un contenedor que muestra un **mensaje de bienvenida** utilizando una **prop**. Ejemplo:
> *"Bienvenido a nuestra tienda online"*

Este componente es el lugar donde más adelante se integrará el catálogo de productos.

---

📸 Vista previa
![image](https://github.com/user-attachments/assets/334f67cc-095f-48f7-9c62-420fbd7ceae0)



Entrega 2 - Navegación y Catálogo de Productos
Descripción
Esta entrega corresponde a la segunda fase del proyecto de la tienda online, donde se implementó la navegación entre vistas utilizando React Router. La aplicación permite navegar entre el catálogo principal de productos, filtrar por categorías y acceder al detalle de cada producto.

Funcionalidades Implementadas
Navegación con React Router
Se configuraron rutas para mostrar el catálogo completo, el catálogo filtrado por categorías, y la vista detallada de cada producto mediante rutas dinámicas.

Barra de navegación
Un menú en la parte superior que permite seleccionar las diferentes categorías y navegar al inicio o a otras secciones.

Listado dinámico de productos
Se utiliza el método map() para renderizar la lista de productos. Cada producto se muestra como una tarjeta con imagen, nombre y precio.

Detalle de producto
Al hacer clic en un producto, se navega a una página con la información detallada del mismo, incluyendo un contador para agregar unidades al carrito (funcionalidad pendiente).

Carga asíncrona simulada
Los datos se obtienen mediante promesas con un pequeño retraso para simular llamadas a una API.

Estructura del Proyecto
Componentes de presentación:

BarraDeNavegacion.jsx

TarjetaProducto.jsx

ContadorProducto.jsx

ListaDeProductos.jsx

DetalleProducto.jsx

Componentes contenedores (manejan estado y lógica):

ContenedorProductos.jsx

ContenedorDetalleProducto.jsx

Configuración de rutas en App.jsx usando React Router.

