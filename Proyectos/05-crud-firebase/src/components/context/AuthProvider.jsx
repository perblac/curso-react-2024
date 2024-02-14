import { useState } from "react";
import AuthContext from "./AuthContext";
import {getAuth,signOut} from 'firebase/auth';
import Swal from "sweetalert2";

const AuthProvider = (props) => {
  const { children } = props;
  const [estadoGlobal, setEstadoGlobal] = useState(null);
  const auth = getAuth();
  
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

  return (
    <>
      <AuthContext.Provider value={{ estadoGlobal, setEstadoGlobal, cerrarSesion }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
