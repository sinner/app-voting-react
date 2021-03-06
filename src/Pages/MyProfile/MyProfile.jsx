import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Config
import homeStyles from '../../Themes/jss/Pages/HomeStyles';
import env from '../../Config/env';

// Components
import Header from '../../Components/Header/Header';
import CardsGrid from '../../Components/CardsGrid/CardsGrid';
import Footer from '../../Components/Footer/Footer';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class MyProfile extends Component {

  state = {
    focus: '',
    username: '',
    password: '',
  };

  render() {
    const { classes, user } = this.props;
    const applicationName = env.WEBSITE_NAME;
    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.main}>
          <Header applicationName={applicationName} />
          <Container className={classes.cardGrid} maxWidth="md">
            <TextField
              disabled
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="off"
              value={user.display_name}
              autoFocus
            />
            <TextField
              disabled
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Name"
              name="email"
              autoComplete="off"
              value={user.email}
              autoFocus
            />
            <CardsGrid cards={cards} />
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

const mapDispatchToProps = { };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(homeStyles)(MyProfile)),
);
