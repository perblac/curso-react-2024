// import

import { useState } from "react";

// variables globales

const Contador = () => {
    // hooks
    const [counter, setCounter] = useState(0)
    // vars
    // functs
    function handleIncrementCounter(value = 1) {
        setCounter((previousValue) => previousValue + value);
    }
    function handleDecrementCounter(value) {
        setCounter(counter - value);
    }
    
    return (
        <>
            <h1>El contador basic example</h1>
            <h2>{counter}</h2>
            <button onClick={() => handleIncrementCounter(13)}>Incrementar 13</button>
            <button onClick={() => handleIncrementCounter(1)}>Incrementar 1</button>
            <button onClick={() => handleDecrementCounter(5)}>Decrementar 5</button>
        </>
    );
};

export default Contador