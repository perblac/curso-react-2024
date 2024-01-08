// imports
import React, { useState } from "react";

// globals
const initialState = {
  nombre: "",
  email: "",
  password: "",
};

const RegistrarFormulario = () => {
  //vars
  const [formData, setFormData] = useState(initialState);

  //hooks
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Los datos del usuario son: ",formData);
  }

  function handleInputChange(event) {
    event.preventDefault();
    const {name, value} = event.target;
    // console.log("name:", name,"value:",value);
    setFormData({...formData,[name]:value});
  }

  // functs

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Registrar usuario</button>
    </form>
  );
};

export default RegistrarFormulario;
