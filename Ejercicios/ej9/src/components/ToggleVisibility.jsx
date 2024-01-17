// imports
// globals

import { useState } from "react"

const ToggleVisibility = () => {
    // hooks
    const [visible, setVisible] = useState(true);
    // vars
    // functs
    function handleToggleVisibility() {
        setVisible((prev) => !prev)
    }
  return (
    <>
        <button onClick={handleToggleVisibility}>ToggleVisibility</button>
        { visible ? <p>Párrafo</p> : '' }
    </>
  )
}

export default ToggleVisibility