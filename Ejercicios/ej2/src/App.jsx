import "./App.css";
import ElementsList from "./components/ElementsList";

function App() {
  return (
    <>
      <h1>Ejercicio 2: Uso de listas</h1>
      <p>
        Renderiza una lista (&lt;ul&gt;) de elementos (&lt;li&gt;) usando map()
        en un array de nombres.
      </p>
      <hr />
      <ElementsList />
    </>
  );
}

export default App;
