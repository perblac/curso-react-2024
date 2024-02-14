import ComponenteUno from "./components/ComponenteUno";
import ComponenteCuatro from "./components/ComponenteCuatro";
import AppProvider from "./context/AppProvider";

const AppContext = () => {
  return (
    <>
      <div>AppContext</div>
      <AppProvider>
        <ComponenteUno />
        <ComponenteCuatro />
      </AppProvider>
    </>
  );
};

export default AppContext;
