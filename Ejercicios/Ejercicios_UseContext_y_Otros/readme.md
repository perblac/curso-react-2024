# Ejercicios para practicar UseContext y otros elementos de React Router
## Ejercicio 1: Aplicación de Tema con React Router y useContext
### Enunciado:
Crea una aplicación que permita a los usuarios cambiar el tema de la interfaz y navegar entre diferentes páginas. Utiliza `useContext` para gestionar el estado del tema en toda la aplicación y `react-router-dom` para la navegación entre páginas. Además, utiliza `useRef` para realizar una acción específica al cambiar de tema.
### Requisitos:
1. ### Temas:
- Implementa dos temas: claro y oscuro.
- Utiliza `useContext` para gestionar el estado del tema en toda la aplicación.
- Proporciona un botón en la barra de navegación para cambiar entre los temas.
- Cuando el tema cambie, utiliza `useRef` para enfocar un elemento específico en la página.
2. ### Navegación:
- Implementa tres páginas: Inicio, Acerca de y Contacto.
- Utiliza `react-router-dom` para gestionar la navegación entre estas páginas.
- Muestra un enlace en la barra de navegación para cada página.
- Asegúrate de que al cambiar de página, el tema actual se mantenga.
3. ### Formulario:
- Implementa un custom Hook para gestionar el formulario, manejando el estado del formulario, la validación de los campos y todo lo que consideres oportuno. Prueba el hook en nuestro proyecto.

## Ejercicio 2: Gestión de Usuario Autenticado con useContext
### Enunciado:
Crea una aplicación que simule la autenticación de usuarios utilizando useContext. El contexto gestionará si un usuario está autenticado o no, y varios componentes utilizarán este estado para mostrar contenido dependiendo del estado de autenticación.
1. ### Rutas:
- Utiliza React Router para gestionar la navegación entre las páginas. Configura rutas para las páginas de Login, Home, Acerca de y Contacto.
- Protección de Rutas:
    - Implementa un mecanismo de protección de rutas para la página de tal forma que si en el localStorage no tenemos un user y una passsword, no podremos navegar en ningún sitio, siendo redireccionados siempre a `/login`.
    - Desde Login podremos crear un usuario a través de un formulario. El formulario de registro ha depedir 2 veces el password.
    - Cuando registremos el usuario en el localStorege, su nombre aparecerá en todas las rutas (useContext) en la barra de navegación que debe de haber. Si la clave del localStorage llamada user la eliminamos, de nuevo nos debe de redireccionar siempre a la ruta `/login`.
2. ### Reutilizar Código
- Reutiliza código del ejercicio anterior para facilitar el trabajo de este segundo ejercicio.
