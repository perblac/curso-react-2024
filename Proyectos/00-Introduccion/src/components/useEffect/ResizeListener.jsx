// imports
import { useEffect, useState } from "react";
// globals
const stateInitial = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const ResizeListener = () => {
  // hooks
  const [windowSize, setWindowSize] = useState(stateInitial);
  useEffect(() => {
    function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // agrego event listener para el evento de cambio de tamaño de la ventana
      window.addEventListener("resize", handleResize);
  
    return () => {
        // elimino el evento listener para evitar la fuga de memoria
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  
  // vars
  // functs


  return (
    <div>ResizeListener
        <p>
            Tamaño de la ventana: {windowSize.width} x {windowSize.height}
        </p>
    </div>
  );
};

export default ResizeListener;
