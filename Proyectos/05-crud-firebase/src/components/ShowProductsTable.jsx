import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { deleteProducto, getProductos } from "../firebase/productsApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowProductsTable = ({ updateProductos }) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const fetchShowProducts = async () => {
    try {
      const productosData = await getProductos();
      setProductos(productosData);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await Swal.fire({
        title: "¿Estás seguro?",
        text: `No se puede revertir la acción. Se va a eliminar el id ${id}`,
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Si, eliminarlo",
      });
      if (response.isConfirmed) {
        await deleteProducto(id);
        updateProductos();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "Error eliminando",
      });
    }
  };

  useEffect(() => {
    // traemos los productos
    fetchShowProducts();
  }, [updateProductos]);

  return (
    <>
      <div className="w-2/3 mx-auto my-10">
        <h2 className="text-2xl font-semibold mb-4">Lista de Productos</h2>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-500 text-white">
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Nombre</th>
                  <th className="py-2 px-4 border-b">Stock</th>
                  <th className="py-2 px-4 border-b">Descripcion</th>
                  <th className="py-2 px-4 border-b">Imagen</th>
                  <th className="py-2 px-4 border-b">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((prod) => (
                    <tr key={prod.id} className="border-b">
                      <td className="py-2 px-4">{prod.id}</td>
                      <td className="py-2 px-4">{prod.nombre}</td>
                      <td className="py-2 px-4">{prod.stock}</td>
                      <td className="py-2 px-4">{prod.descripcion}</td>
                      <td className="py-2 px-4">
                        <img
                          src={prod.url}
                          alt={prod.descripcion}
                          className="h-10 w-10 object-cover"
                        />
                      </td>
                      <td className="flex justify-between py-2 px-4 gap-2">
                        <Link to={`/products/${prod.id}`}>
                          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded focus:outline-none hover:shadow hover:shadow-slate-500">
                            Editar
                          </button>
                        </Link>

                        <button
                          className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded focus:outline-none hover:shadow hover:shadow-slate-500"
                          onClick={() => handleDelete(prod.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default ShowProductsTable;
