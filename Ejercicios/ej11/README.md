# Ejercicio 11: Renderizado condicional avanzado con expresiones lógicas

Crea un componente `ConditionalRenderAdvanced` que acepte dos props: `isLoggedIn`
(booleano) y `userRole` (cadena de texto). Este componente debe renderizar un mensaje diferente
según las siguientes condiciones:
- Si `isLoggedIn` es `true`, muestra un mensaje de bienvenida para el usuario.
- Si `isLoggedIn` es `false`, muestra un mensaje solicitando al usuario que inicie sesión.
- Si el usuario está autenticado y su `userRole` es "admin", muestra un mensaje adicional de
privilegios de administrador.