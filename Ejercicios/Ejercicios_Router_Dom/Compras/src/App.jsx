import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPageLayout from "./pages/RootPageLayout";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { AuthProvider } from "./context/useAuthContext";
import { ShoppingCartProvider } from "./context/useShoppingCartContext";
import { ProductsProvider } from "./context/useProductsContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "/product/:idProduct",
          element: <ProductDetailPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          element: <ProtectedRoute isActive={true} redirectPath={"/login"} />,
          children: [
            {
              path: "/cart",
              element: <ShoppingCartPage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <ProductsProvider>
          <RouterProvider router={router} />
        </ProductsProvider>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}

export default App;
