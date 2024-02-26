import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import { useShoppingCartContext } from "../context/useShoppingCartContext";

const ProductCard = (props) => {
  const { product } = props;
  const { logged } = useAuthContext();
  const { addToCart } = useShoppingCartContext();
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="min-w-32 flex flex-col p-2 mx-2 my-4 bg-sky-200 border-none rounded-lg shadow-sm">
      <div className="cursor-pointer" onClick={handleDetails}>

      <div className="text-xl font-bold border-b border-b-sky-900 text-center">
        {product.name}
      </div>
      <div className="text-base text-sky-900">
        Color {product.color}
      </div>
      <div className="text-base text-green-900 text-right">
        {product.price} €
      </div>
      </div>
      {logged && (
        <>
        <button className="text-4xl" onClick={() => addToCart(product)}>
        🛒
        </button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
