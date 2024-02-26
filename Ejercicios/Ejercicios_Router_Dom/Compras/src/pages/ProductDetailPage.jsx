import { useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../context/useProductsContext";
import { useAuthContext } from "../context/useAuthContext";
import { useShoppingCartContext } from "../context/useShoppingCartContext";

const ProductDetailPage = () => {
  const { products } = useProductsContext();
  const { idProduct } = useParams();
  const product = products.filter((prod) => prod.id === parseInt(idProduct))[0];
  const { logged } = useAuthContext();
  const { addToCart} = useShoppingCartContext();
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[90vh] bg-sky-200 flex flex-col justify-start items-center">
      <div className="rounded-xl bg-slate-50 shadow-md hover:shadow-lg flex flex-col w-3/4 md:w-1/2 m-4 p-4">
        <div className="text-3xl font-bold text-center mb-4">
          Producto: {product.name}
        </div>
        <div className="text-xl">
          <p className="border-b border-b-sky-900 mb-2">Descripción</p>
          <p className="text-base indent-8 text-justify mb-4">
            {product.description}
          </p>
        </div>
        <div className="text-base font-semibold">Color: {product.color}</div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-sm text-green-900 text-right w-full">
            Precio {product.price} €
          </div>
          {logged && (
            <>
              <button className="text-4xl" onClick={() => addToCart(product)}>
                +🛒
              </button>
            </>
          )}
        </div>
      </div>
      <button className="text-xl m-4 py-2 px-4 rounded-full cursor-pointer bg-sky-300 hover:bg-sky-400" onClick={()=> navigate(-1)}>
            Volver
      </button>
    </div>
  );
};

export default ProductDetailPage;
