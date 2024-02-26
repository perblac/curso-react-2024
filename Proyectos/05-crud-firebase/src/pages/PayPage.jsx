import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PayPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const precioTotal = state * 32 + state * 32 * 0.21;

  const handlePay = () => {
    Swal.fire({
      icon: "success",
      title: "Pago realizado",
      text: `Pago realizado con éxito ${precioTotal}€`,
    });
    navigate("/");
  };
  return (
    <div className="min-h-[90vh] flex flex-col items-center bg-zinc-200">
      <div className="flex items-center justify-center mx-10">
        <div className="flex flex-col justify-center items-start">
          <span className="p-4 m-4 rounded-lg bg-zinc-200 shadow shadow-zinc-800">

          Total : {state} a 32€ = {state * 32}€; con 21% iva = {precioTotal}€
          </span>
          <button onClick={handlePay}
                    className="relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Pagar
                      </button>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
