// imports
import PropTypes from "prop-types";
// globals

const UserList = (props) => {
    // hooks
    // vars
    const { users } = props;
    // functs

  return (
    <ol style={{ padding: 0, margin: 0 }}>
        { users.map((user,index) => (
            <li key={index} id={'key'+index}>
                <>
                    {user}<br/>
                    <a href={'/#key'+index}>índice = {index}</a>
                </>
            </li>
        )) }
    </ol>
  )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.string),
}

export default UserList