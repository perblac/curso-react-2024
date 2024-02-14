import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/utils/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    // cada objeto es una ruta
    {
      // cada ruta tiene un path y un element
      path: "/",
      element: <RootPage />,
      // y puede tener un elemento para errores
      errorElement: <ErrorPage />,
      // los hijos es un array de objetos
      children: [
        {
          element: (<ProtectedRoute isActive={true} redirectPath={"/login"} />),
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
