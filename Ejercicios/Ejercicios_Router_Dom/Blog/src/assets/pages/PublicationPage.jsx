import { useNavigate, useParams } from "react-router-dom";
import { useStorageContext } from "../context/useStorageContext";
import "./PublicationPage.css";

const PublicationPage = () => {
  const navigate = useNavigate();
  const { idPost } = useParams();
  const { loadPost, deletePost } = useStorageContext();
  const post = loadPost(idPost);

  const handleClickDelete = () => {
    const respuesta = confirm(
      "¿Estás seguro de que deseas eliminar este post?",
    );
    if (respuesta) {
      deletePost(idPost);
      navigate("/");
    }
  };

  return (
    <main className="container">
      <div className="zona">
        <article className="post">
          <div className="cabecera">
            <h1 className="titulo">{post.titulo}</h1>
            <h3>Fecha {new Date(post.unixtime).toLocaleDateString()} {new Date(post.unixtime).toLocaleTimeString()}</h3>
          </div>
          <div className="cuerpo">
            <p className="textopost">{post.texto}</p>
          </div>
          <div className="boton">
            <button className="eliminar" onClick={handleClickDelete}>
              Eliminar Post
            </button>
          </div>
        </article>
        <button className="volver" onClick={()=> navigate(-1)}>Volver</button>
      </div>
    </main>
  );
};

export default PublicationPage;
