//import
import { useState } from "react";

//globals
const initialState = [
  {
    id: 1,
    title: "Comprar leche",
    completed: false,
  },
  {
    id: 2,
    title: "Comprar agua",
    completed: false,
  },
  {
    id: 3,
    title: "Estudiar React",
    completed: true,
  },
];

const TodoListVeryBasic = () => {
  //hook
  const [tasks, setTasks] = useState(initialState);
  //vars

  //functs
  function handleCompletion(taskId) {
    const updateTask = tasks.map(task => (
        task.id === taskId ?  {...task, completed: !task.completed } : task
        ));
    setTasks(updateTask);
  }
  return (
    <>
      <div>
        <h1>Lista de Tareas (Very Basic)</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompletion(task.id)}
              >
              </input>
              <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
              {task.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListVeryBasic;
