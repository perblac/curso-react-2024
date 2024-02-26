import { useProductsContext } from "../context/useProductsContext"
import ProductCard from "./ProductCard";

const ProductList = () => {
    const {products} = useProductsContext();

  return (
    <div className="flex flex-wrap justify-evenly items-center w-3/4">
        {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default ProductList