import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Config
import homeStyles from '../../Themes/jss/Pages/HomeStyles';
import env from '../../Config/env';

// Actions
import { getDefaultExchangeCurrencies } from '../../Actions/Exchange/currency.actions';

// Components
import Header from '../../Components/HeaderRouter/Header'
import Footer from '../../Components/Footer/Footer';
import Exchange from '../../Components/Exchange/Exchange';

class Home extends Component {
  state = {
    focus: '',
    username: '',
    password: '',
  };

  constructor (props) {
    super(props);
    this.props.getDefaultExchangeCurrencies();
  }

  render() {
    const { classes } = this.props;
    const applicationName = env.WEBSITE_NAME;
    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.main}>
          <Header applicationName={applicationName} />
          <Container className={classes.cardGrid} maxWidth="md">
            <Exchange />
          </Container>
        </main>
        {/* Footer */}
        <Footer />
        {/* End footer */}
      </Fragment>
    );
  }

}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isAuthenticated: state.userReducer.isAuthenticated,
});

const mapDispatchToProps = {
  getDefaultExchangeCurrencies,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(homeStyles)(Home)),
);