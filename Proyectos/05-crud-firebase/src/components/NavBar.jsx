import { useContext } from "react";
import AuthContext from "./context/AuthContext";

const NavBar = () => {
  const { estadoGlobal, setEstadoGlobal, cerrarSesion } =
    useContext(AuthContext);
  const handleLogout = () => {
    cerrarSesion();
    setEstadoGlobal(null);
  };
  return (
    <header className="min-w-screen bg-zinc-800 text-white">
      <div className="w-full flex justify-end items-center">
        {!!estadoGlobal && (
          <>
          <span className="justify-self-center mx-auto text-4xl font-bold">Crud en React con Firebase</span>
            <span className="text-sm m-2">{estadoGlobal.displayName}</span>
            <img className="w-12 rounded-full m-2" src={estadoGlobal.photoURL} alt={estadoGlobal.displayName} />
            <button
              className="m-2 px-4 py-2 rounded-lg hover:text-zinc-900 border-4 border-transparent hover:border-4 hover:border-solid hover:border-zinc-200 hover:bg-zinc-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
