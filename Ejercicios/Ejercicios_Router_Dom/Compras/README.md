# Aplicación de Compras con Autenticación
Desarrolla una aplicación de compras que requiera autenticación para acceder a ciertas secciones. La aplicación debe ser implementada utilizando React 18 y React Router Dom. Aquí están los requisitos:
1. **Páginas de Autenticación**:
    - Crea páginas de inicio de sesión (`/login`) y registro (`/register`).
    - Utiliza React Router Dom para navegar entre estas páginas.
2. **Página Principal (`/`)**:
    - Muestra una lista de productos disponibles para comprar.
    - Solo usuarios autenticados deben ver el botón "Agregar al Carrito".
3. **Página de Detalles del Producto (`/product/:id`)**:
    - Muestra información detallada sobre un producto específico basado en el ID proporcionado en la URL.
    - Incluye un botón para agregar el producto al carrito de compras.
4. **Carrito de Compras (`/cart`)**:
    - Solo accesible para usuarios autenticados.
    - Muestra los productos agregados al carrito con la opción de eliminar productos.
    - Incluye un botón para realizar la compra.
5. **Protección de Rutas**:
    - Utiliza React Router Dom para proteger las rutas que requieren autenticación. Por ejemplo, los usuarios no autenticados no deberían poder acceder al carrito de compras.
6. **Gestión de Estado Global**:
    - Utiliza un estado global (puedes considerar usar el hook UseContext. Dicho Hooks lo veremos en clase la próxima semana) para gestionar la autenticación del usuario y el contenido del carrito de compras.