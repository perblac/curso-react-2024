import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./components/react-router-dom-ejemplo/components/Inicio";
import Usuarios from "./components/react-router-dom-ejemplo/components/Usuarios";
import ErrorPage from "./components/react-router-dom-ejemplo/pages/ErrorPage";
import RootLayout from "./components/react-router-dom-ejemplo/pages/RootLayout";
import UsuariosDetails from "./components/react-router-dom-ejemplo/pages/UsuariosDetails";

function App() {
  const router = createBrowserRouter(
      [
        { path: "/datos",
          // element: <Inicio />, // llamaremos al elem que envuelve las rutas RootLayout
          element: <RootLayout />,
          // loader: () => {
          //   // fetch de datos
          // },
          errorElement:<ErrorPage/>,
          children: [
            { path: "", element:<Inicio/> },
            { path: "usuarios", element: <Usuarios /> },
            { path: "usuarios/:idUser", element: <UsuariosDetails /> },
            {},
          ]
        },
        // { path: "/admin", element: <Admin /> },
      ]
    );

  return <RouterProvider router={router} />;
}

export default App;
