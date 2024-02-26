import { useState } from "react";
import "./CreatePublicationPage.css";
import { useStorageContext } from "../context/useStorageContext";

const initialState = {
  id: 0,
  titulo: "",
  texto: "",
};

const CreatePublicationPage = () => {
  const [post, setPost] = useState(initialState);
  const { savePost } = useStorageContext();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setPost((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    const result = savePost(post);
    if (!result) setPost(initialState);
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="formulario">
        <form onSubmit={handleSubmit} className="form">
          <div className="titulo">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={post.titulo}
              placeholder="Título del post"
              onChange={handleChange}
            />
          </div>
          <div className="texto">
            <label htmlFor="texto">Contenido</label>
            <textarea
              name="texto"
              id="texto"
              cols="120"
              rows="10"
              value={post.texto}
              placeholder="Texto del post"
              onChange={handleChange}
            ></textarea>
          </div>
          <input type="submit" value="Publicar" className="publicar"/>
        </form>
      </div>
    </div>
  );
};

export default CreatePublicationPage;
