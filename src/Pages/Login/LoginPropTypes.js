import PropTypes from 'prop-types';

const LoginPropTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  message: PropTypes.string,
  accessToken: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func,
  clearLogin: PropTypes.func,
  logout: PropTypes.func,
  navigationRedirect: PropTypes.func,
};

export default LoginPropTypes;
