import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
// import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
// import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import snackBarStatus from '../../Actions/Global/snackbar.actions';

const stylesSnackWrapper = theme => ({
  success: {
    backgroundColor: '#9a66bf',
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  formError: {
    backgroundColor: '#f1cfcf',
    color: '#ea5858',
    fontFamily: 'GothamSSm-Book',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal',
    '@media only screen and (min-width: 960px)': {
      maxWidth: '680px',
    },
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  messageFormError: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    textAlign: 'left',
  },
});

function showMessage(message) {
  return (
    <React.Fragment>
      {message}
    </React.Fragment>
  );
}

function MySnackbarContent(props) {
  const { classes, className, message, onClose, type, variant, ...other } = props;
  const RenderIcon = type === 'success' ? CheckCircleIcon : ErrorIcon;
  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span
          id="client-snackbar"
          className={type !== 'formError' ? classes.message : classes.messageFormError}
        >
          {type !== 'formError' && (
            <RenderIcon className={classNames(classes.icon, classes.iconVariant)} />
          )}
          {message && Array.isArray(message) ? message.map(text => showMessage(text)) : message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.instanceOf(Object).isRequired,
  type: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(stylesSnackWrapper)(MySnackbarContent);

const stylesSnackBar = theme => ({
  root: {
    zIndex: '1500',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class SnackBar extends Component {
  handleClose = () => {
    this.props.snackBarStatus({
      payload: { enable: false },
    });
  };
  render() {
    const { enable, title, type, classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={enable}
          onClose={this.handleClose}
          className={classes.root}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={type}
            message={title}
            type={type}
          />
        </Snackbar>
      </div>
    );
  }
}

SnackBar.propTypes = {
  enable: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  snackBarStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  enable: state.snackbarReducer.enable,
  title: state.snackbarReducer.title,
  type: state.snackbarReducer.type,
});

const mapDispatchToProps = {
  snackBarStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(stylesSnackBar)(SnackBar));
