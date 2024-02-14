import { useState } from "react";
import { addProducto } from "../firebase/productsApi";
import Swal from "sweetalert2";

const AddProductForm = ({updateProductos}) => {
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Tenemos que añadir la información a nuestra bd de firebase
    try {
      const nuevoProducto = await addProducto({
        nombre,
        stock,
        descripcion,
        url,
      }
      );
      console.log(`Datos insertados correctamente en la colección. (id = ${nuevoProducto})`);
      // invocamos una ventana de todo ok
      Swal.fire({
        icon: "success",
        title: "Inserción correcta",
        text: `Datos insertados correctamente en la colección. (id = ${nuevoProducto})`,
      }
      );
      // limpiamos formulario
      setNombre("");
      setStock(0);
      setDescripcion("");
      setUrl("");
      // actualizo el padre con la funcion de repintar
      updateProductos();
    } catch (error) {
      console.error("Error adding producto", error);
    }
  }
  return (
    <>
      <div className="w-1/2 mx-auto mt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-semibold my-4">Añadir nuevo producto</h2>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre del Producto
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="nombre"
              value={nombre}
              required
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="stock"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Stock
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="stock"
              value={stock}
              required
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="descripcion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Descripción del Producto
            </label>
            <textarea
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="descripcion"
              value={descripcion}
              required
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="urlimg"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Imagen
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="urlimg"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none hover:shadow hover:shadow-slate-500"
            >
              Añadir producto
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
