import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import ShowProductsTable from "../components/ShowProductsTable";
// import NavBar from "../components/NavBar";
import Header from "../components/Header";

const HomePage = () => {
  const [, setForceUpdate] = useState();

  const updateProductos = () => {
    setForceUpdate([]);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        {/* <h1 className="text-4xl font-bold my-8">
        Crud en React con Firebase
      </h1> */}
        <AddProductForm updateProductos={updateProductos} />
        <ShowProductsTable updateProductos={updateProductos} />
      </div>
    </>
  );
};

export default HomePage;
