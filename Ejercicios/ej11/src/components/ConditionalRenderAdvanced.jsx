import PropTypes from 'prop-types'

const ConditionalRenderAdvanced = props => {
    const { isLoggedIn, userRole } = props;
  return (
    <div style={{ border: '1px solid black', padding: '1rem', borderRadius: '2rem' }}>
        ConditionalRenderAdvanced
        <hr />
        <p>isLoggedIn: { isLoggedIn.toString() }</p>
        { isLoggedIn ? (<p>¡Bienvenido usuario!</p>) : (<p>Por favor inicie sesión</p>) }
        <p>userRole: { userRole }</p>
        { ( userRole === "admin" && isLoggedIn ) ? (<p>Dispone de privilegios de administrador</p>) : '' }
    </div>
  )
}

ConditionalRenderAdvanced.propTypes = {
    isLoggedIn: PropTypes.bool,
    userRole: PropTypes.string,
}

export default ConditionalRenderAdvanced