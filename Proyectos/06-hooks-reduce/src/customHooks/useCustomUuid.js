import { useState } from "react";

/**
 * Custom que me genera un UUID formado por:
 * 3 letras departamento - date.now() - aleatorio - aleatorio - aleatorio
 * 
 */
const useCustomUuid = () => {
  
    const generatedUuid = () => {
      let result = [];
      result.push('ABC'); // pasar a parámetro de entrada
      result.push(Date.now());
      result.push(Math.random()*1000);
      result.push(Math.random().toString(36).substring(2));
      result.push(Math.random().toString(36).substring(2));
      return result.join('-');
    }
  const [uuid, setUuid] = useState(generatedUuid());

  // const newUuid = () => {
  //   setUuid(generatedUuid());
  // }

  return [uuid, () => setUuid(generatedUuid())];
}

export default useCustomUuid;