import ProductList from "../components/ProductList"

const MainPage = () => {
  return (
    <>
      <h1 className="text-2xl text-center m-4 p-2 border-b border-b-slate-500">Productos disponibles</h1>
      <ProductList/>
    </>
  )
}

export default MainPage