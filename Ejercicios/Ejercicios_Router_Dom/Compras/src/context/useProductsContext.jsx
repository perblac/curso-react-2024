import { createContext, useContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const { children } = props;
  const products = [
    {
      id: 1,
      name: "Camisa",
      description: "Camisa de manga corta",
      color: "azul",
      price: 20,
    },
    {
      id: 2,
      name: "Pantalón",
      description: "Pantalón de tela",
      color: "negro",
      price: 30,
    },
    {
      id: 3,
      name: "Zapatos",
      description: "Zapatos de cuero",
      color: "marrón",
      price: 50,
    },
    {
      id: 4,
      name: "Bufanda",
      description: "Bufanda de lana",
      color: "gris",
      price: 15,
    },
    {
      id: 5,
      name: "Gorra",
      description: "Gorra de algodón",
      color: "blanco",
      price: 10,
    },
    {
      id: 6,
      name: "Sudadera",
      description: "Sudadera con capucha",
      color: "rojo",
      price: 25,
    },
    {
      id: 7,
      name: "Jeans",
      description: "Jeans ajustados",
      color: "azul",
      price: 35,
    },
    {
      id: 8,
      name: "Chaqueta",
      description: "Chaqueta de cuero",
      color: "negro",
      price: 60,
    },
    {
      id: 9,
      name: "Bufanda",
      description: "Bufanda de algodón",
      color: "verde",
      price: 12,
    },
    {
      id: 10,
      name: "Suéter",
      description: "Suéter de lana",
      color: "azul marino",
      price: 40,
    },
  ];

  return (
    <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
