// imports
import { useState } from "react";
import "./ElementsList.css";

// globals
const initialState = [
  "Hidrógeno",
  "Helio",
  "Litio",
  "Berilio",
  "Boro",
  "Carbono",
  "Nitrógeno",
  "Oxígeno",
  "Flúor",
  "Neón",
  "Sodio",
  "Magnesio",
  "Aluminio",
  "Silicio",
  "Fósforo",
  "Azufre",
  "Cloro",
  "Argón",
  "Potasio",
  "Calcio",
];

const ElementsList = () => {
  // hooks
  // vars
  const [elemList, setElemList] = useState(initialState);

  // functs
  function handleShuffle() {
    const list = [...elemList];
    // shuffle list
    for (let index = list.length - 1; index > 0; index--) {
      const newPos = Math.floor(Math.random() * (index + 1));
      [list[index], list[newPos]] = [list[newPos], list[index]];
    }
    setElemList(list);
  }

  return (
    <>
      <strong>ElementsList</strong>
      <br />
      <small>(click!)</small>
      <ul onClick={handleShuffle}>
        {elemList.map((elem, key) => (
          <li key={key}> {elem} </li>
        ))}
      </ul>
    </>
  );
};

export default ElementsList;
