// import
import "./App.css";
import Welcome from "./components/Welcome";

// globals

function App() {
  // hooks
  // vars

  // functs

  return (
    <>
      <h1>Ejercicio 1: Renderizado condicional</h1>
      <p>
        Renderiza un elemento &lt;p&gt; con el texto "Bienvenido" si una
        variable isLoggedIn es true, de lo contrario muestra "Por favor, inicia
        sesión".
      </p>
      <hr />
      <Welcome />
    </>
  );
}

export default App;
