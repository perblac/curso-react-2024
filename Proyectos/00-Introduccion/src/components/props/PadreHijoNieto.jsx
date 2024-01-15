// imports

import { useState } from "react";

// globals
const Nieto = (props) => {
    // vars
    const { counter, handleIncrementCounter, handleDecrementCounter } = props;

  return (
    <div className="bg-gray-400 p-8 rounded-md text-center">
      <p className="text-2xl font-bold mb-6">Contador Nieto : {counter}</p>
      <button
        className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-800 mx-3"
        onClick={() => handleIncrementCounter(3)}
      >
        Incrementar 3
      </button>
      <button
        className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-800 mx-3"
        onClick={() => handleDecrementCounter(10)}
      >
        Decrementar 10
      </button>
    </div>
  );
};
const Hijo = (props) => {
  // vars
  const { counter, handleIncrementCounter, handleDecrementCounter } = props;
  // functs

  return (
    <div className="bg-gray-400 p-8 rounded-md text-center">
      <p className="text-2xl font-bold mb-6">Contador Hijo : {counter}</p>
      <button
        className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-800 mx-3"
        onClick={() => handleIncrementCounter(2)}
      >
        Incrementar 2
      </button>
      <button
        className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-800 mx-3"
        onClick={() => handleDecrementCounter(5)}
      >
        Decrementar 5
      </button>

      <Nieto
        counter={counter}
        handleIncrementCounter={(v) => handleIncrementCounter(v)}
        handleDecrementCounter={(v) => handleDecrementCounter(v)}
      />
    </div>
  );
};
const PadreHijoNieto = () => {
  // hooks
  const [counter, setCounter] = useState(0);
  // vars
  // functs
  function handleIncrementCounter(value = 1) {
    setCounter((previousValue) => previousValue + value);
  }
  function handleDecrementCounter(value = 1) {
    setCounter((previousValue) => previousValue - value);
  }

  return (
    <div className="bg-gray-400 p-8 rounded-md text-center">
      <p className="text-2xl font-bold mb-6">Contador Padre : {counter}</p>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
        onClick={() => handleIncrementCounter(1)}
      >
        Incrementar 1
      </button>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800 mx-3"
        onClick={() => handleDecrementCounter(1)}
      >
        Decrementar 1
      </button>
      <Hijo
        counter={counter}
        handleIncrementCounter={(v) => handleIncrementCounter(v)}
        handleDecrementCounter={(v) => handleDecrementCounter(v)}
      />
      <Hijo
        counter={counter}
        handleIncrementCounter={(v) => handleIncrementCounter(v)}
        handleDecrementCounter={(v) => handleDecrementCounter(v)}
      />
    </div>
  );
};

export default PadreHijoNieto;
