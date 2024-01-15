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
    const [friends, setFriends] = useState(initialState);
    // var
    // funct
    function handleIncrementFriend(friendName) {
        // incrementa en 1 el número de amigos de Isaías
        setFriends((prevFriends) => (
                {
                    ...prevFriends,
                    [friendName]: prevFriends[friendName] + 1,
                }
            ));
    }

  return (
    <>
        <div>
            <span>
                Isaías tiene <strong>{ friends.isaias }</strong> amigos
            </span>
            <button onClick={() => handleIncrementFriend("isaias")}>
                Aumentar +1 amigos
            </button>
        </div>
        
        <div>
            <span>
                Ana tiene <strong>{ friends.ana }</strong> amigos
            </span>
            <button onClick={() => handleIncrementFriend("ana")}>
                Aumentar +1 amigos
            </button>
        </div>
        <div>
            <span>
                María tiene <strong>{ friends.maria }</strong> amigos
            </span>
            <button onClick={() => handleIncrementFriend("maria")}>
                Aumentar +1 amigos
            </button>
        </div>
    </>
  )
}

export default ContadorDoble