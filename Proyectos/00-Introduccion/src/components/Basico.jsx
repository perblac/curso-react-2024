
export const Basico = () => {
    // declaracion de los hooks

    // variables locales
    const nombre = "Rubén ";
    const tlfno = 612345678;
    const miArray = ['chapa','cuello','culo'];
    const miObjeto = {nombre: 'Juan', edad: 25};
    const elementoJSX = <p>El mundo es maravilloso</p> ;

    // funciones
    const sumar = (a,b) => {
        return a + b;
    }

  return (
    // aquello que quiero renderizar (JSX)
    // siempre que queramos usar javascript hay que englobarlo en llaves {}
    <>
    <div>Tu nombre es {nombre}</div>
    <p>Nº de telefono: {tlfno}</p>
    <p>Sumo 5 + 7 = {sumar(5,7)}</p>
    <p>True -- {true.toString()}</p>
    <ul>
        {miArray.map((parte,key) => <li key={key}>{parte}</li>)}
    </ul>
    <div>
        <p>Nombre: {miObjeto.nombre}</p>
        <p>Edad: {miObjeto.edad}</p>
    </div>
    {elementoJSX}
    </>
  )
}
