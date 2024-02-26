import { Outlet } from "react-router-dom"
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const RootPageLayout = () => {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default RootPageLayout