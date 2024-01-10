import DarkLightMode from './DarkLightMode';
import './Inicio.css';
// import Buscador from './components/Buscador';
import Contador from './components/Contador';
import ContadorDoble from './components/ContadorDoble';
import ContadorDobleBest from './components/ContadorDobleBest';
import TodoListBasicTailwindcss from './components/TodoListBasicTailwindcss';
// import RegistrarFormulario from './components/RegistrarFormulario';
import TodoListVeryBasic from './components/TodoListVeryBasic';

const Inicio = () => {
  return (
    <>
    
    <Contador />
    <hr />

    <ContadorDoble/>
    <hr />

    <ContadorDobleBest/>
    <hr />

    <DarkLightMode/>
    <hr />

    <TodoListVeryBasic/>
    <hr />

    <TodoListBasicTailwindcss/>
    
    {/* <RegistrarFormulario/> */}

    {/* <Buscador/> */}

    </>
  )
}

export default Inicio