import { useContext } from "react";
import AppCont from "../context/AppCont";

const ComponenteCuatro = () => {
    const {appState, setAppState} = useContext(AppCont);
  return (
    <>
    <div>ComponenteCuatro</div>
    <p>En el componente cuatro el Count: {appState.count}</p>
    </>
  )
}

export default ComponenteCuatro