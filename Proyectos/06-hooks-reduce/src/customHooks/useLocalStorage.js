import { useState } from "react";

const useLocalStorage = (key, initialState) => {
    function getInitial() {
        const data = JSON.parse(localStorage.getItem(key));
        if (!data) localStorage.setItem(key, JSON.stringify(initialState));
        return data ?? JSON.parse(localStorage.getItem(key));
    }
  const [data, setData] = useState(getInitial());
  function read() {
    return JSON.parse(localStorage.getItem(key)) ?? initialState;
  }

  function save(element) {
    const datos = JSON.parse(localStorage.getItem(key));
    if (element) datos.push(element);
    localStorage.setItem(key, JSON.stringify(datos));
    setData(datos);
  }

  function reset() {
    localStorage.setItem(key, JSON.stringify(initialState));
    setData(getInitial());
  }

  return { data, read, save, reset };
};

export default useLocalStorage;
