import React, { useState } from 'react'

const initialState = [
    "manzana",
    "pera",
    "platano",
    "naranja",
    "melon",
    "uva",
]
const Buscador = () => {
    const [searchItem, setSearchItem] = useState("");
    const [filterItems, setfilterItems] = useState(initialState);
/**
    Un formulario para buscar
    ul los elementos del initialstate
    cada vez que escriba en el formulario realizaremos la busqueda
  */
  return (
    <>
    </>
  )
}

export default Buscador