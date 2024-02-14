import { useParams } from "react-router-dom"

const UsuariosDetails = () => {
  const { idUser } = useParams();
  return (
    <>
    <div className="text-5xl font-bold">Usuarios Details</div>
    <p>IdUser es: {idUser}</p>
    </>
  )
}

export default UsuariosDetails