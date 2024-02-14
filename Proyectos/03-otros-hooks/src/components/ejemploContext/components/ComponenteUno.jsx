import ComponenteDos from "./ComponenteDos"
import { useContext } from "react";
import AppCont from "../context/AppCont";

const ComponenteUno = () => {
    const {appState, setAppState} = useContext(AppCont);
  return (
    <>
    <div>ComponenteUno</div>
    <ComponenteDos/>
    <p>En el componente uno el Count: {appState.count}</p>
    <button onClick={()=>setAppState(
        {...appState, count: appState.count + 1}
    )}>Incrementar</button>
    </>
  )
}

export default ComponenteUno