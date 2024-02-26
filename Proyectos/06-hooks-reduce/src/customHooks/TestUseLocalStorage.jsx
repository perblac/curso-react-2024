import useLocalStorage from "./useLocalStorage";

const TestUseLocalStorage = () => {
  const { data:dataLS, read, save, reset } = useLocalStorage('clave', []);
  const handleAdd = (e) => {
    e.preventDefault();
    const data = e.target.element.value.trim();
    if (data) save(data);
  }
  return (
    <div>
      <h1>TestUseLocalStorage</h1>
      <p>{ dataLS.map((dato,key)=>(
        <span key={key}>{dato}</span>
      )) }</p>
      <form onSubmit={handleAdd}>
        <input name="element" type="text" />
        <input type="submit" value="Añadir" />
      </form>
      <button onClick={reset}>reiniciar</button>
    </div>
  );
};

export default TestUseLocalStorage;
