import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { logout } from '../../Actions/Auth/logout.actions';

const Logout = ({ logout, isAuthenticated }) => {
  logout();
  if (isAuthenticated) {
    return (
      'Login out!'
    );
  }
  return (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isAuthenticated: state.userReducer.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
