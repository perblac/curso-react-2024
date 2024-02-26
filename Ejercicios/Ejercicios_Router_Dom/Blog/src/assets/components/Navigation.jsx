import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="title">Blog</h1>
        <ul className="menu">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/create">
            <li>Crear post</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
