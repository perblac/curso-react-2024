// imports
import { useEffect, useState } from "react";
// globals

const UseEffectBasic = () => {
  // hooks
  const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     console.log("Hola desde el useEffect");
  //   });
  // cuando creo un useEffect sin el array de dependencias, se ejecutará cada vez que cambie cualquier estado

  //   useEffect(() => {
  //     console.log("Hola desde el useEffect");
  //   }, []); // <--- array de dependencias vacio.
  // ejecuta lo que hay dentro
  // sólo cuando se monta por primera vez un componente

  //   useEffect(() => {
  //     console.log("Hola desde el useEffect");
  //   }, [counter]);

  useEffect(() => {
    console.log("Hola desde UseEffect con return");

    return () => {
      // cuando se desmonta un componente
      // se ejecuta lo del return
    };
  }, []);

  // vars
  // functs
  function handleIncrementCounter(value = 1) {
    setCounter((previousValue) => previousValue + value);
  }

  console.log("Hola desde el inicio");
  return (
    <>
      <h1>El contador basic example</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrementCounter(1)}>Incrementar 1</button>
    </>
  );
};

export default UseEffectBasic;

// vars
// hooks
