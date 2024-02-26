import { cerrarSesion } from "../firebase/productsApi";
import { useAuthContext } from "./context/useAuthContext";

const SignOutButton = () => {
  const { signOutFirebase } = useAuthContext();
  const handleSignOut = async () => {
    // tendra que llamar a una func de firebase para cerrar la sesion
    try {
      const hasCerrado = await cerrarSesion();
      if (hasCerrado) {
        signOutFirebase();
      } else {
        throw new Error("No se pudo cerrar la sesión");
      }
    } catch (error) {
      console.log("Error sesion", error);
    }
  };
  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md"
    >
      Cerrar Sesión
    </button>
  );
};

export default SignOutButton;
