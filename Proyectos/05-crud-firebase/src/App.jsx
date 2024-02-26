import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditProductPage from "./pages/EditProductPage";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RootPage from "./pages/RootPage";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import { AuthProvider } from "./components/context/useAuthContext";
import PayPage from "./pages/PayPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute redirectPath="/login" />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "/products/:idproduct",
              element: <EditProductPage />,
            },
            {
              // path: "/pay/:total",
              path: "/pay",
              element: <PayPage />,
            },
            {
              path: "/payment",
              element: <PaymentPage />,
            },
          ],
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return (
    // añadir context estadoGlobal
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  );
}

export default App;
