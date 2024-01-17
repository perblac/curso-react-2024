// imports
// globals

const Card = props => {
    // hooks
    // vars
    const { header, body, footer } = props;
    // functs
  return (
    <div className="card p-0" style={{ width: '12rem' }}>
        { header}
        { body }
        { footer }
    </div>
  )
}

export default Card