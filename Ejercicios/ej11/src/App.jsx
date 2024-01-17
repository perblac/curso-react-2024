import "./App.css";
import ConditionalRenderAdvanced from "./components/ConditionalRenderAdvanced";

function App() {
  return (
    <>
      <h1>
        Ejercicio 11: Renderizado condicional avanzado con expresiones lógicas
      </h1>
      <p>
        Crea un componente ConditionalRenderAdvanced que acepte dos props:
        isLoggedIn (booleano) y userRole (cadena de texto). Este componente debe
        renderizar un mensaje diferente según las siguientes condiciones:
      </p>
      <ul style={{ width: "40%", margin: "auto" }}>
        <li>
          Si isLoggedIn es true, muestra un mensaje de bienvenida para el
          usuario.
        </li>
        <li>
          Si isLoggedIn es false, muestra un mensaje solicitando al usuario que
          inicie sesión.
        </li>
        <li>
          Si el usuario está autenticado y su userRole es &quot;admin&quot;,
          muestra un mensaje adicional de privilegios de administrador.
        </li>
      </ul>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <ConditionalRenderAdvanced isLoggedIn={false} userRole={"ninguno"} />
        <ConditionalRenderAdvanced isLoggedIn={true} userRole={"user"} />
        <ConditionalRenderAdvanced isLoggedIn={false} userRole={"admin"} />
        <ConditionalRenderAdvanced isLoggedIn={true} userRole={"admin"} />
      </div>
    </>
  );
}

export default App;
