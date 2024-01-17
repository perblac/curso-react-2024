// imports

import { useState } from "react";
import CustomButton from "./CustomButton";

// globals
let ruta = [
  "Irun",
  "San Sebastián",
  "Zarautz",
  "Deba",
  "Markina-Xemein",
  "Gernika-Lumo",
  "Bilbao",
  "Pobena",
  "Castro Urdiales",
  "Laredo",
  "Santoña",
  "Noja",
  "Güemes",
  "Santander",
  "Somo",
  "Arnuero",
  "Santillana del Mar",
  "Comillas",
  "San Vicente de la Barquera",
  "Unquera",
  "Llanes",
  "Ribadesella",
  "Villaviciosa",
  "Gijón",
  "Avilés",
  "Santiago de Compostela",
];

let rutaAlt = [
    'Sevilla',
    'Castilblanco de los Arroyos',
    'Almadén de la Plata',
    'Monesterio',
    'Fuente de Cantos',
    'Zafra',
    'Los Santos de Maimona',
    'Villafranca de los Barros',
    'Mérida',
    'Alcuéscar',
    'Cáceres',
    'Aldea del Cano',
    'Carcaboso',
    'Cañaveral',
    'Galisteo',
    'Membrio',
    'Aldeanueva del Camino',
    'Hervás',
    'Baños de Montemayor',
    'Béjar',
    'Calzada de Béjar',
    'Fuenterroble de Salvatierra',
    'San Pedro de Rozados',
    'Salamanca',
    'El Cubo de la Tierra del Vino',
    'Zamora',
    'Ourense',
    'Santiago de Compostela'
  ];

const Container = () => {
  // hooks
  const [ciudad, setCiudad] = useState(ruta[0]);
  // vars
  // functs
  function handleNextCity() {
    let index = ruta.indexOf(ciudad);
    index = index == ruta.length - 1 ? 0 : ++index;
    setCiudad(ruta[index]);
  }
  function handlePreviousCity() {
    let index = ruta.indexOf(ciudad);
    index = index == 0 ? ruta.length - 1 : --index;
    setCiudad(ruta[index]);
  }
  function handleChangeRoute() {
    let temp = [...ruta];
    ruta = [...rutaAlt];
    rutaAlt = [...temp];
    setCiudad(ruta[0]);
  }
  return (
    <div>
      <h1>Ejercicio 6: Uso avanzado de props</h1>
      <p>
        Crea un componente `CustomButton` que acepte props para personalizar su
        apariencia. Debe admitir props para el color de fondo, el texto y un
        evento `onClick`.
      </p>
      <hr />
      <div className="flex justify-center">
        <span className="border border-2 rounded-2xl p-2 m-3">{ciudad} - ciudad {ruta.indexOf(ciudad) + 1}</span>
      </div>
      <div className="flex justify-center gap-2 mb-2">
        <CustomButton
          backgroundColor="#0ffa0f"
          text="Siguiente ciudad"
          event={handleNextCity}
        />
        <CustomButton
          backgroundColor="#fafa0f"
          text="Ciudad anterior"
          event={handlePreviousCity}
        />
      </div>
      <div className="flex justify-center gap-2 mb-2">
        <CustomButton backgroundColor='#0f0ffa' text='Alternar ruta' event={handleChangeRoute}/>
      </div>
      <hr />
      <CustomButton/>
    </div>
  );
};

export default Container;
