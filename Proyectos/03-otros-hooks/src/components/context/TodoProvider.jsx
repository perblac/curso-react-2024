import { useState } from "react";
import TodoContext from "./TodoContext";

const initialState = [
  {
    id: 1,
    nombre: "sacar al perro",
    completada: false,
  },
  {
    id: 2,
    nombre: "aprender React",
    completada: false,
  },
];

// aqui declaramos toda la lógica que vamos a necesitar para lo que vayamos a pasar

const TodoProvider = (props) => {
  const [tareas, setTareas] = useState(initialState);
  const { children } = props;

  function eliminarTarea() {}
  return (
    <>
      <TodoContext.Provider value={ { tareas, setTareas, eliminarTarea } }>
        <>{children}</>
      </TodoContext.Provider>
    </>
  );
};

export default TodoProvider;
