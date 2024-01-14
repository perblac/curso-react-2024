// imports
import React, { useState } from "react";
import './Welcome.css';

// globals
const initialState = false;

const Welcome = () => {
  // hooks
  // vars
  const [isLoggedIn, setIsLoggedIn] = useState(initialState);

  // functs
  function handleChange() {
    setIsLoggedIn((prevValue) => !prevValue);
  }

  return (
    <>
      <p>{isLoggedIn ? "Bienvenido" : "Por favor, inicie sesión"}</p>
      <p>isLoggedIn: { isLoggedIn.toString() }</p>
      <button onClick={handleChange}>cambiar</button>
    </>
  );
};

export default Welcome;
