import { useNavigate, useParams } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";
import { useEffect, useState } from "react";
import { getProductById } from "../firebase/productsApi";

const EditProductPage = () => {
  const { idproduct } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    // realizamos una consulta a firebase para traer 
    // el documento cuyo id es idproduct
    const fetchProduct = async () => {
      try {
        // la funcion que tenga en productsApi.js
        const productoData = await getProductById(idproduct);
        if (productoData) {
          setProducto(productoData);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching prodcut', error);
      }
    }
    fetchProduct();
  }, [])
  
  return (
    <>
    <div className="w-5/6 mx-auto mt-10">
      {/* Cortocircuito para renderizar solo cuando hay datos */}
      { producto && (<EditProductForm initialData={producto}/>)}
    </div>
    </>
  );
};

export default EditProductPage;
