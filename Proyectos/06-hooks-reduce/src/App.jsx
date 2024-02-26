import TestUseLocalStorage from "./customHooks/TestUseLocalStorage";
import useCounter from "./customHooks/useCounter";
import useCustomUuid from "./customHooks/useCustomUuid";
import BasicoReducer from "./useReducer/BasicoReducer";
import FormUserPassword from "./useReducer/FormUserPassword";

function App() {
  // Custom Hook useCounter
  const { myCount, incCount, decCount, reset } = useCounter();
  // Custom Hook useCustomUuid
  const [ aaa, generarUUID ] = useCustomUuid();

  return (
    <>
      <h1 className="text-6xl">Custom hooks y useReduce</h1>
      <BasicoReducer />
      <FormUserPassword />
      <hr />
      <h1 className="text-2xl">Custom hooks</h1>
      <h2 className="text-xl">Generar UUID</h2>
      <div>
        <p className="text-lg font-bold font-mono">
          {aaa}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={generarUUID}>
          Generar Nuevo UUID
        </button>
      </div>
      <hr />
      <TestUseLocalStorage/>
    </>
  );
}
export default App;
