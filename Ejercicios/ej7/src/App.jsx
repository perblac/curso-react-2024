import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <h1>Ejercicio 7: Renderizado condicional avanzado</h1>
      <p>
        Crea un componente <em>ConditionalRender</em> que acepte una prop{" "}
        <em>condition</em>. Si <em>condition</em> es <em>true</em>, muestra un
        párrafo con el texto &quot;Condición verdadera&quot;; de lo contrario, muestra un
        párrafo con el texto &quot;Condición falsa&quot;.
      </p>
      <hr />
      <Container/>
    </>
  );
}

export default App;
