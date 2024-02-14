import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="bg-blue-800">
        <nav className=" flex flex-row flex-nowrap">
            <p className="text-white font-bold text-3xl inline-block">Peliculas</p>
            <ul className="flex flex-row list-none">
                <li><Link to="">Home</Link></li>
                <li><Link to="peliculas">Peliculas</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar