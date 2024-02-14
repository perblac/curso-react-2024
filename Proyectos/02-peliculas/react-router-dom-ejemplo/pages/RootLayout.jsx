import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import RootNavBar from "../components/RootNavBar";

const RootLayout = () => {
  return (
    <>

        {/* Barra de navegacion */}
        <RootNavBar/>
        {/* Aqui los hijos */}
        <Outlet />
        {/* Footer */}
        <Footer/>

    </>
  );
};

export default RootLayout;
