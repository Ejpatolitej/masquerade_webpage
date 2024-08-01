import PropTypes from 'prop-types';

export default function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className='welcomeMessage'>Welcome {props.username}</h2>
  );
  const loginMessage = <h2 className='loginMessage'>Please log in</h2>;

  return props.isLoggedIn ? welcomeMessage : loginMessage;
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: 'Guest',
};
