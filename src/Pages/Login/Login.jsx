import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Config
import env from '../../Config/env';
import loginStyles from '../../Themes/jss/Pages/LoginStyles';
import LoginPropTypes from './LoginPropTypes';
import trans from '../../Translations/translation.service';

//Components
import Copyright from '../../Components/Copyright/Copyright';

// Actions
import { login, clearLogin } from '../../Actions/Auth/login.actions';
import { logout } from '../../Actions/Auth/logout.actions';
import { navigationRedirect } from '../../Actions/Global/navigation.actions';
import SnackBar from '../../Components/SnackBar/SnackBar';

const { WEBSITE_NAME } = env;

export class Login extends Component {
  state = {
    focus: '',
    username: '',
    password: '',
  };

  componentDidMount() {
    this.setState({
      focus: '',
      username: '',
      password: '',
    });
  }

  handleEmailChange (email) {
    this.setState({ username: email });
  }

  handlePasswordChange (password) {
    this.setState({ password });
  }

  async handleSubmit () {
    const { username, password } = this.state;
    if (username && password) {
      const response = await this.props.login({
        username,
        password
      });
      if (!response.user) {
        this.setState({ password: '' });
      }
    }
  }

  render () {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <SnackBar />
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {trans('login.form.title')}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => e.preventDefault()}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={trans('login.form.placeholder.email')}
              name="email"
              autoComplete="off"
              value={username}
              onChange={(e) => this.handleEmailChange(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={trans('login.form.placeholder.password')}
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => this.handlePasswordChange(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={(e) => this.handleSubmit(e)}
            >
              {trans('login.form.button.login')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                {trans('login.form.link.forgotPassword')}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {trans('login.form.link.signUp')}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright websiteName={WEBSITE_NAME} />
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  username: state.loginReducer.username,
  password: state.loginReducer.password,
  error: state.loginReducer.error,
  badCredentials: state.loginReducer.badCredentials,
  message: state.loginReducer.message,
  accessToken: state.userReducer.accessToken,
  isAuthenticated: state.userReducer.isAuthenticated,
});

const mapDispatchToProps = {
  login,
  clearLogin,
  logout,
  navigationRedirect,
};

Login.propTypes = LoginPropTypes;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(loginStyles)(Login)),
);