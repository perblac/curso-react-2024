import { useEffect, useRef } from "react";

const EjemploUseRef = () => {
  //hooks
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  
  }, [])
  

  return (
    <div>
      <label htmlFor="">
        Nombre:
        <input ref={inputRef} type="text" name="" id="" />
      </label>
    </div>
  );
};

export default EjemploUseRef;
