// imports
// globals

const ConditionalRender = props => {
    // hooks
    // vars
    // functs
    const { condition } = props;
  return (
    <p>
        { condition ? 'Condición verdadera' : 'Condición falsa' }
    </p>
  )
}

export default ConditionalRender