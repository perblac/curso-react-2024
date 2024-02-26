import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import './App.css'
import RootPageLayout from "./assets/pages/RootPageLayout";
import ErrorPage from "./assets/pages/ErrorPage";
import ListPublicationsPage from "./assets/pages/ListPublicationsPage";
import PublicationPage from "./assets/pages/PublicationPage";
import CreatePublicationPage from "./assets/pages/CreatePublicationPage";
import { StorageProvider } from "./assets/context/useStorageContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <ListPublicationsPage />,
        },
        {
          path: "/post/:idPost",
          element: <PublicationPage />,
        },
        {
          path: "/create",
          element: <CreatePublicationPage />,
        },
      ],
    },
  ]);

  return (
    <StorageProvider>
      <RouterProvider router={router} />
    </StorageProvider>
  );
}

export default App;
