import { useState } from "react";
import generateId from "../utils/generateId";

const initialState = JSON.parse(localStorage.getItem("blogPosts")) ?? [];

const useLocalStorage = () => {
  const [data, setData] = useState(initialState);

  const savePost = (post) => {
    if (post.titulo.length > 0 && post.texto.length > 0) {
      const date = new Date();
      const newArray = data;
      newArray.push({
        ...post,
        id: generateId(),
        fecha: date.toLocaleDateString(),
        unixtime: date.getTime(),
      });
      localStorage.setItem("blogPosts", JSON.stringify(newArray));
      setData(newArray);
      return 0;
    }
    return 1;
  };

  const loadPost = (id) => {
    const postArray = data.filter((post) => post.id === id);
    return postArray[0] ?? null;
  };

  const deletePost = (id) => {
    const newArray = data.filter((post) => post.id !== id);
    localStorage.setItem("blogPosts", JSON.stringify(newArray));
    setData(newArray);
  };

  const getAll = () => {
    const postsArray = data.map((post) => ({
      id: post.id,
      titulo: post.titulo,
      fecha: post.fecha,
      unixtime: post.unixtime,
    }));
    postsArray.sort((a, b) => (a.unixtime > b.unixtime ? 1 : -1));
    return postsArray;
  };

  return { savePost, loadPost, deletePost, getAll };
};

export default useLocalStorage;
