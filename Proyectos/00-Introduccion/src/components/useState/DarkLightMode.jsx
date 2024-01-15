// import
import { useState } from "react";
import "./DarkLightMode.css";

// global

const DarkLightMode = () => {
  //hook
  const [darkMode, setDarkMode] = useState(false);
  //vars

  //funct
  function handleToggleTheme() {
    setDarkMode((prev) => (
        !prev
    ))
  }
  return (
    <>
      <div className={`default ${ darkMode ? 'dark' : 'light' }`}>
        <h1>Cambio de tema en React</h1>
        <button onClick={handleToggleTheme}>
          {darkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
        </button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          tenetur, explicabo eius mollitia dolorum incidunt, consequuntur facere
          adipisci iste quibusdam nesciunt ipsum! Maxime optio quia, illo
          accusamus amet similique adipisci?
        </p>
      </div>
    </>
  );
};

export default DarkLightMode;
