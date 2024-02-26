import { useShoppingCartContext } from "../context/useShoppingCartContext";

const ShoppingCartItems = () => {
  const { cartData, addToCart, removeFromCart, payCart } = useShoppingCartContext();

  return (
    <div>
      <h1 className="text-2xl font-bold m-4 p-4 text-center">
        Shopping Cart Items
      </h1>
      {cartData.length > 0 ? (
        <>
          <ul>
            {cartData.map((product) => (
              <li key={product.id} className="p-2 m-2">
                <div className="flex flex-nowrap justify-center items-center">
                  <button
                    className="mx-2 rounded-full px-4 py-2 bg-red-500 text-white"
                    onClick={() => removeFromCart(product.id)}
                  >
                    -
                  </button>
                  <span>
                    {product.name} - color: {product.color} - precio/ud.{" "}
                    {product.price} € x {product.cantidad} = Total:{" "}
                    {product.price * product.cantidad} €
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-t-sky-900 text-center">
                <span>Total : {cartData.reduce((acum, b)=> acum + (b.price * b.cantidad), 0)} €</span>
                <button className="m-2 p-2 rounded-full bg-slate-200 hover:bg-slate-300" onClick={payCart}>Pagar</button>
          </div>
        </>
      ) : (
        <>
          <p className="text-base italic text-center">No hay productos en el carrito</p>
        </>
      )}
    </div>
  );
};

export default ShoppingCartItems;
