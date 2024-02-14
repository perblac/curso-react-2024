import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../firebase/productsApi";
import Swal from "sweetalert2";
const EditProductForm = (props) => {
  const { initialData } = props;
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await editProduct(initialData.id, formData);
        Swal.fire({
            icon:"success",
            title:"¡Actualización correcta!",
            text:"Datos actualizados correctamente.",
        });
        // navigate(-1);
    } catch (error) {
        console.error("Error al editar el producto", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1); // o navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <label className="text-5xl mt-10 mb-8">Editar producto</label>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded shadow-lg max-w-xl w-full xm-auto"
        >
          <label className="block mb-4" htmlFor="nombre">
            <span className="text-gray-700">Nombre del producto:</span>
            <input
              type="text"
              className="mt-2 block w-full"
              name="nombre"
              value={formData?.nombre}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4" htmlFor="stock">
            <span className="text-gray-700">Stock:</span>
            <input
              type="text"
              className="mt-2 block w-full"
              name="stock"
              value={formData?.stock || ""}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4" htmlFor="descripcion">
            <span className="text-gray-700">Descripción:</span>
            <textarea
              type="text"
              className="mt-2 block w-full"
              name="descripcion"
              value={formData?.descripcion}
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="block mb-4" htmlFor="url">
            <span className="text-gray-700">Url Image:</span>
            <input
              type="text"
              className="mt-2 block w-full"
              name="url"
              value={formData?.url}
              onChange={handleChange}
            />
          </label>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 rounded text-white hover:bg-blue-800"
            >
              Actualizar
            </button>
            <button
              onClick={handleGoBack}
              className="py-2 px-4 bg-gray-400 rounded text-white hover:bg-gray-600"
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProductForm;
