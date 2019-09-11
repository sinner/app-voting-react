import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';

import trans from '../../Translations/translation.service';

// Assets
import logo from '../../logo.svg';

// Config
import headerStyles from '../../Themes/jss/Components/HeaderStyles';

const useStyles = makeStyles(headerStyles);

const Header = (props) => {
  const classes = useStyles();
  const { isAuthenticated } = props;

  const renderUserButton = () => {
    let linkButton = (
      <Grid item>
        <Button variant="outlined" color="primary">
          <Link component={RouterLink} to="/login">
            {trans('default.headerMenu.signIn')}
          </Link>
        </Button>
      </Grid>
    );
    if (isAuthenticated) {
      linkButton = (
        <Fragment>
          <Grid item>
            <Button variant="outlined" color="secondary">
              <Link component={RouterLink} to="/my-profile">
                {trans('default.headerMenu.myProfile')}
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              <Link component={RouterLink} to="/logout">
                {trans('default.headerMenu.logout')}
              </Link>
            </Button>
          </Grid>
        </Fragment>
      );
    }
    return linkButton;
  };

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          <img src={logo} className={classes.logo} alt="logo" />
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Button variant="outlined" color="primary">
                <Link component={RouterLink} to="/">
                  {trans('default.headerMenu.home')}
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                <Link component={RouterLink} to="/services">
                  {trans('default.headerMenu.service')}
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                {trans('default.headerMenu.aboutUs')}
              </Button>
            </Grid>
            {renderUserButton()}
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isAuthenticated: state.userReducer.isAuthenticated,
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
