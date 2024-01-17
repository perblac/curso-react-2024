// imports
// globals

const CustomButton = props => {
    // hooks
    // vars
    // functs
    const { backgroundColor = '#fafafa', text = 'Botón por defecto', event = (() => {alert('Defina la función con el prop `event`')}) } = props;
  return (
    <>
    <button style={{ backgroundColor: backgroundColor }} onClick={event}>
        { text }
    </button>
    </>
  )
}

CustomButton.propTypes = {}

export default CustomButton