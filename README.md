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

📸 Vista previa (ENTREGA 1)
![image](https://github.com/user-attachments/assets/334f67cc-095f-48f7-9c62-420fbd7ceae0)



# Entrega 2 - Navegación y Catálogo de Productos

## Descripción

En esta segunda entrega del proyecto de tienda online, se implementó la **navegación entre diferentes vistas** utilizando **React Router**. La aplicación permite al usuario:

- Visualizar un catálogo principal con todos los productos.
- Filtrar productos por categorías desde el menú.
- Acceder al detalle de cada producto mediante rutas dinámicas.
- Navegar fácilmente entre las secciones de la tienda.

## Funcionalidades Principales

- **Rutas Dinámicas**: Uso de React Router para mostrar diferentes vistas y productos mediante URLs parametrizadas.
- **Barra de Navegación**: Menú superior con enlaces a Inicio, Categorías y otras secciones.
- **Listado Dinámico de Productos**: Renderizado con `.map()` de un array de productos con `key` únicos.
- **Detalle de Producto**: Vista individual con información detallada y contador para agregar unidades (interfaz lista para futuras funciones).
- **Carga Simulada Asíncrona**: Uso de promesas con retardo para simular llamadas a APIs.

📸 Vista previa (ENTREGA 2)
![image](https://github.com/user-attachments/assets/c6e8605e-a602-43e5-b429-4fd08367e25a)


