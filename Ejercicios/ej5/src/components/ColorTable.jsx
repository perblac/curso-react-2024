// imports
import { useState } from "react";
// globals
const colors = generarColoresAleatorios();

function generarColoresAleatorios() {
  const colores = [];
  for (let i = 0; i < 25; i++) {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colores.push(color);
  }
  return colores;
}

console.log(colors);

const ColorTable = () => {
  // hooks
  // vars
  const [col, setCol] = useState(colors);

  // functs
  function handleAdvanceColors(event) {
    if (event.movementX > 0) {
      const listColors = [...col];
      const final = listColors.pop();
      listColors.unshift(final);
      setCol(listColors);
    }
    if (event.movementX < 0) {
      const listColors = [...col];
      const inicial = listColors.shift();
      listColors.push(inicial);
      setCol(listColors);
    }
  }

  return (
    <>
      <table onMouseMove={handleAdvanceColors} style={{ margin: "auto" }}>
        <tbody>
          <tr>
            {col.map((color, key) => {
              return (
                <td
                  key={key}
                  style={{
                    backgroundColor: color,
                    width: "10px",
                    height: "75px",
                  }}
                ></td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ColorTable;
