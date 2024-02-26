import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const NavBar = () => {
  const { logged, logout } = useAuthContext();
  return (
    <div className="min-w-screen bg-zinc-800 text-white">
      <div className="w-full flex justify-end items-center">
        <span className="justify-self-center mx-auto text-2xl font-bold">
          <Link to="/">Aplicación de Compras con Autenticación</Link>
        </span>
        {logged ? (
          <>
            <div className="p-2 mx-2">
              <Link to="/cart">Carrito</Link>
            </div>
            <div className="p-2 mx-2">
              <span className="text-sm m-2">{logged.fullname}</span>
              <button
                className="m-2 px-4 py-2 rounded-lg hover:text-zinc-900 border-4 border-transparent hover:border-4 hover:border-solid hover:border-zinc-200 hover:bg-zinc-300"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
          <div className="p-2 mx-2">
            <Link to="/login">Login</Link>
          </div>
          <div className="p-2 mx-2">
            <Link to="/register">Registrarse</Link>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
