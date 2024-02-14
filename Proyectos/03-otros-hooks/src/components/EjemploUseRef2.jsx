import { useRef, useState } from "react";

const EjemploUseRef2 = () => {
  const [nombre, setNombre] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    if(inputRef.current){
        inputRef.current.focus();
    }
  }
  return (
    <div>
      <label htmlFor="nombre">Nombre:</label>

      <input
        type="text"
        id="nombre"
        ref={inputRef}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleFocus}>Cambiar foco</button>
    </div>
  );
};

export default EjemploUseRef2;
