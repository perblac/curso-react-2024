import { useContext } from "react";
import AppCont from "../context/AppCont";

const ComponenteTres = () => {
    const {appState, setAppState} = useContext(AppCont);
  return (
    <>
    <div>ComponenteTres</div>    
    <p>En el componente tres el Count: {appState.count}</p>
    <button onClick={()=>setAppState(
        {...appState, count: appState.count + 1}
    )}>Incrementar</button>
    </>
  )
}

export default ComponenteTres