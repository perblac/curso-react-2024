import "./App.css";
import Container from "./components/COntainer";

function App() {
  return (
    <>
      <h1>Ejercicio 8: Composición de componentes</h1>
      <p>
        Crea un componente <em>Card</em> que acepte props para el título (
        <em>title</em>), el cuerpo (<em>body</em>) y un footer (<em>footer</em>
        ). Este componente renderizará una tarjeta con las secciones de título,
        cuerpo y pie.
      </p>
      <hr />
      <Container/>
    </>
  );
}

export default App;
