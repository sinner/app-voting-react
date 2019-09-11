/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

// Proptypes

// Pages
// import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Services from '../Pages/Services/Services';
import Logout from '../Pages/Logout/Logout';
import NotFound from '../Pages/NotFound/NotFound';
import MyProfile from '../Pages/MyProfile/MyProfile';

// Action creators
import { getAuthDataFromStorage } from '../Actions/Auth/user.actions';
import Voting from '../Pages/Voting/Voting';

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

const GuestRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

/**
  
 */

class Routes extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getAuthDataFromStorage();
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router history={hist}>
        <Switch>
          <Route
            exact
            path="/"
            component={Voting}
          />
          <Route
            path="/services"
            component={Services}
          />
          <Route
            path="/logout"
            component={Logout}
          />
          <GuestRoute
            path="/login"
            isAuthenticated={isAuthenticated}
            component={Login}
          />
          <PrivateRoute
            path="/my-profile"
            isAuthenticated={isAuthenticated}
            component={MyProfile}
          />
          <Route
            component={NotFound}
          />
        </Switch>
      </Router>
    );
  }
}

const mapToState = ({ userReducer }) => ({
  isAuthenticated: userReducer.isAuthenticated,
});

const mapToDispatch = {
  getAuthDataFromStorage,
};

export default connect(
  mapToState,
  mapToDispatch,
)(Routes);
