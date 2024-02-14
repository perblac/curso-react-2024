import { useState, useRef } from "react"

const EjemploUseRef3 = () => {
    const [contador, setContador] = useState(0);
    const botonRef = useRef();

    const handleClick = () => {
        setContador(prev=>prev+1);
        // setTimeout(()=>alert(`Contador:${contador}`),10000);
        botonRef.current.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    }
  return (
    <>
    <div>
        <p>
            Contador : {contador}
        </p>
        <button ref={botonRef} onClick={handleClick} >Pulsar</button>
    </div>
    </>
  )
}

export default EjemploUseRef3