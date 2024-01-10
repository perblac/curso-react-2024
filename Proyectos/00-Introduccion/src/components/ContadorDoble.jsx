// import

import { useState } from "react"

// globals
const initialState = {
    isaias: 0,
    ana: 4,
    maria: 1,
};

const ContadorDoble = () => {
    // hook
    // var
    const [friends, setFriends] = useState(initialState);
    // funct
    function handleIncrementIsaias() {
        // incrementa en 1 el número de amigos de Isaías
        setFriends({
            ...friends,
            isaias: friends.isaias + 1,
        });
    }
    function handleIncrementAna() {
        // incrementa en 1 el número de amigos de Isaías
        setFriends({
            ...friends,
            ana: friends.ana + 1,
        });
    }
    function handleIncrementMaria() {
        // incrementa en 1 el número de amigos de Isaías
        setFriends({
            ...friends,
            maria: friends.maria + 1,
        });
    }

  return (
    <>
        <div>
            <span>
                Isaías tiene <strong>{ friends.isaias }</strong> amigos
            </span>
            <button onClick={handleIncrementIsaias}>
                Aumentar +1 amigos
            </button>
        </div>
        
        <div>
            <span>
                Ana tiene <strong>{ friends.ana }</strong> amigos
            </span>
            <button onClick={handleIncrementAna}>
                Aumentar +1 amigos
            </button>
        </div>
        <div>
            <span>
                María tiene <strong>{ friends.maria }</strong> amigos
            </span>
            <button onClick={handleIncrementMaria}>
                Aumentar +1 amigos
            </button>
        </div>
    </>
  )
}

export default ContadorDoble