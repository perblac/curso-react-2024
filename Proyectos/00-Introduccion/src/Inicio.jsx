import './Inicio.css';
import Buscador from './components/Buscador';
import Contador from './components/Contador';
import RegistrarFormulario from './components/RegistrarFormulario';

const Inicio = () => {
  return (
    <>
    <Contador />
    
    <RegistrarFormulario/>

    <Buscador/>

    </>
  )
}

export default Inicio