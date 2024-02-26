import { useReducer } from "react";
import { edadReducer } from "./edadReducer";

export const initialState = { edad: 10 };
const BasicoReducer = () => {
  const [state, dispatch] = useReducer(edadReducer, initialState);
  /**
   * initialState --> Estado inicial
   * reducer --> Función que define cómo el state pasa de un estado a otro
   *        Se le pasa  dos parámetros state y action
   * state --> Estado actual o estado más actualizado
   * dispatch --> Función para activar la actualización del estado. Hay que pasarle un objeto con
   * a) type
   * b) payload (opcional)
   *
   */
  return (
    <div className="container mx-auto py-8 text-center">
      <div className="text-2xl font-bold">Básico de useReducer</div>
      <p className="text-xl mb-4">Tu edad es: {state.edad}</p>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Incrementar edad
        </button>
        <button
          className="bg-gray-500 text-white rounded px-4 py-2"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrementar edad
        </button>
        <button
          className="bg-gray-500 text-white rounded px-4 py-2"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default BasicoReducer;
