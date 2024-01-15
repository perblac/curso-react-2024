//import
import { useState } from "react";
import { generateId } from "../../helpers/generateId";

//globals
/*
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
*/

const TodoListBasicTailwindcss = () => {
  //hook
  // const [tasks, setTasks] = useState(initialState);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  //vars

  //functs
  function handleKeyDown(event) {
    if (event.key == "Enter") {
      handleAddTask();
    }
  }

  function handleCompletion(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function handleRemoveTask(taskId) {
    const newTasksList = tasks.filter(task => task.id !== taskId);
    setTasks(newTasksList);
  }

  function handleAddTask() {
    if (newTask.trim()) {
      const taskToAdd = {};
      taskToAdd.completed = false;
      taskToAdd.title = newTask.trim();
      taskToAdd.id = generateId();
      const newTasksList = [...tasks];
      newTasksList.push(taskToAdd);
      setTasks(newTasksList);
      setNewTask("");
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md">
        <h1 className=" text-2xl mb-4 font-bold">
          Lista de Tareas (Basic Tailwind)
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Nueva Tarea"
            value={newTask}
            className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-600"
            onChange={(event) => setNewTask(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            onClick={handleAddTask}
          >
            Agregar Tarea
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={task.completed}
                className="mr-4"
                onChange={() => handleCompletion(task.id)}
              />
              <span className={task.completed ? "line-through" : ""}>
                {task.title}
              </span>
              <button
                className="ml-auto bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-800"
                onClick={() => handleRemoveTask(task.id)}
              >
                Borrar Tarea
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListBasicTailwindcss;
