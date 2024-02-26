import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const StorageContext = createContext();

export const StorageProvider = (props) => {
  const { children } = props;
  const { savePost, loadPost, deletePost, getAll } = useLocalStorage();

  return (
    <StorageContext.Provider
      value={{
        savePost,
        loadPost,
        deletePost,
        getAll,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export const useStorageContext = () => {
  return useContext(StorageContext);
};
