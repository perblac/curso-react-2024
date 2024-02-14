import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import RootMoviesLayout from "./pages/RootMoviesLayout";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  const router = createBrowserRouter(
      [
        { path: "/",
          element: <RootMoviesLayout />,
          // loader: () => {
          //   // fetch de datos
          // },
          errorElement:<Error/>,
          children: [
            { index: true, element: <Home/> },
            // { path: "peliculas", element: <Usuarios/>},
            { path: "peliculas/:idPelicula", element: <MovieDetailsPage/>},
          ]
        },
        // { path: "/admin", element: <Admin /> },
      ]
    );

  return <RouterProvider router={router} />;
}

export default App;
