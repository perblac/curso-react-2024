import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <h1>Ejercicio 10: Uso de Fragmentos y Listas</h1>
      <p>
        Crea un componente <em>UserList</em> que acepte una lista de usuarios
        como props y renderice una lista ordenada (<em>&lt;ol&gt;</em>) con los
        nombres de usuarios. Además, cada nombre de usuario debe estar rodeado
        por un Fragmento y un enlace (<em>&lt;a&gt;</em>) que muestre el índice
        del usuario.
      </p>
      <hr />
      <Container/>
    </>
  );
}

export default App;
