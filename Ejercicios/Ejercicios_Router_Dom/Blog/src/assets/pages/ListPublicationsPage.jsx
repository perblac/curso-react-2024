import { Link } from "react-router-dom";
import './ListPublicationsPage.css';
import { useEffect, useState } from "react";
import { useStorageContext } from "../context/useStorageContext";

const ListPublicationsPage = () => {
  const { getAll } = useStorageContext();
  const posts = getAll();
  const [lista, setLista] = useState(posts);

  useEffect(() => {
    setLista(getAll());    
  }, [])
  
  return (
    <main className="container">
      <div className="listPost">
        <ul className="lista">
          {lista.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>
                <span className="titulo">{post.titulo}</span>
                <span className="fecha">{post.fecha} {new Date(post.unixtime).getHours()}:{new Date(post.unixtime).getMinutes()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ListPublicationsPage;
