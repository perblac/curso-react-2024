import { useReducer } from "react";

const initialState = {
  name: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGENAME":
      return { ...state, name: action.payload };
    case "CHANGEPASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const FormUserPassword = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Aqui mostraré los datos capturados del formulario Nombre:${state.name} y Password:${state.password}`,
    );
  };
  const handleChangeName = (e) => {
    dispatch({ type: "CHANGENAME", payload: e.target.value });
  };
  const handleChangePassword = (e) => {
    dispatch({ type: "CHANGEPASSWORD", payload: e.target.value });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 bg-gray-100 rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={state.name}
            className="w-full px-4 py-2 rounded-md border-gray-400"
            onChange={handleChangeName}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={state.password}
            className="w-full px-4 py-2 rounded-md border-gray-400"
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormUserPassword;
