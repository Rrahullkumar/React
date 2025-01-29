import PropTypes from 'prop-types'

function UserGreeting(props){
    return(props.isLoggedIn ? <h2 className="Welcome">Welcome {props.userName}</h2> : <h3 className="Login-prompt">Please Login to continue</h3> );
}

UserGreeting.propTypes={
    isLoggedIn:PropTypes.bool,
    userName: PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn: false,
    userName: "guest",
}

export default UserGreeting