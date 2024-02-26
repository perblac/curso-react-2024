import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  // aqui pongo las funciones que necesite pasar a través de mi contexto
  const [userFirebase, setUserFirebase] = useState(null);
//   const auth = getAuth();

  // funcion para guardar en el estado el inicio de la sesion
  const signInFirebase = (userData) => {
    setUserFirebase(userData);
  };

  // funcion para guardar en el estado el cierre de la sesion
  const signOutFirebase = () => {
    setUserFirebase(null);
  };
  /*
    function cerrarSesion() {
      signOut(auth)
      .then(
          Swal.fire({
              icon: "success",
              title: "¡Hasta luego!",
              text: "La sesión ha sido cerrada exitosamente.",
          })
      )
      .catch((error) =>
          Swal.fire({
              icon: "error",
              title: "Error al cerrar sesión",
              text: `Hubo un error al cerrar la sesion ${error}`,
          })
      )
    }
*/

  return (
    <AuthContext.Provider
      value={{ userFirebase, signInFirebase, signOutFirebase }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {

    return useContext(AuthContext);
}
