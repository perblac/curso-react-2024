// imports
import React, { useState } from 'react';
import './Buscador.css';

// globals
/*
const initialState = [
    "manzana",
    "pera",
    "platano",
    "naranja",
    "melon",
    "uva",
]
*/
const initialState = ['manzana', 'pera', 'plátano', 'naranja', 'uva', 'mandarina', 'limón', 'sandía', 'melón', 'kiwi', 'fresa', 'frambuesa', 'mora', 'piña', 'mango', 'albaricoque', 'chirimoya', 'ciruela', 'higo', 'melocotón', 'níspero', 'cereza', 'pomelo', 'granada', 'membrillo', 'manzana roja', 'manzana verde', 'papaya', 'guayaba', 'caqui', 'mamey', 'coco', 'cereza negra', 'ciruela claudia', 'lima', 'lima limón', 'fruta de la pasión', 'mango verde', 'pera conferencia', 'pera de agua', 'kiwi dorado', 'uva blanca', 'uva roja', 'mandarina clementina', 'mandarina satsuma', 'uva moscatel', 'manzana reineta', 'manzana golden', 'mango maduro', 'kiwi verde', 'melocotón blanco', 'limón amarillo', 'melon', 'granadilla', 'arándano', 'arándano rojo', 'grosella', 'grosella negra', 'zarzamora', 'grosella espinosa', 'breva', 'melón cantalupo', 'tomate', 'higo chumbo', 'ciruela amarga', 'naranja sanguina', 'carambola', 'maracuyá', 'pitahaya', 'chayote', 'lychee'];

const Buscador = () => {
  /**
      Un formulario para buscar
      ul los elementos del initialstate
      cada vez que escriba en el formulario realizaremos la busqueda
    */
// vars
    const [searchItem, setSearchItem] = useState("");
    const [filterItems, setfilterItems] = useState(initialState);

// hooks

// functs

  function handleInputChange(event) {
    event.preventDefault();
    const {value} = event.target;
    setSearchItem(() =>  value);
    const filteredItems = initialState.filter((fruta) => fruta.includes(value));
    setfilterItems(filteredItems);
  }

  function stringToRGB(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 255;
      value = (value < 125)?value+125:value;
      rgb.push(value);
    }
  
    return "#" + rgb.map(value => value.toString(16).padStart(2, '0')).join('');
  }

  return (
    <>
      <ul>
        {filterItems.map((element,key) => (
          <li key={key} style={{ backgroundColor: stringToRGB(element)}}>{element}</li>
        )
        )}
      </ul>
      <form>
        <div>
          <label>
            Fruta:
            <input type="text" name="fruta" value={searchItem} onChange={handleInputChange} />
          </label>
        </div>
      </form>
    </>
  )
}

export default Buscador