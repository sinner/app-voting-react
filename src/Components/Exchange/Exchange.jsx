import React, { Component, Fragment } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Exchange.scss';
import exchangeStyles from '../../Themes/jss/Pages/ExchangeStyles';

// Config
import ExchangePropTypes from './ExchangePropTypes';
import trans from '../../Translations/translation.service';

// Actions
import {
  clearExchangeForm,
  getDefaultExchangeCurrencies,
  calculateExchange,
} from '../../Actions/Exchange/currency.actions';
import { TextField, InputAdornment } from '@material-ui/core';


// Components

class Exchange extends Component {

  state = {
    valueToExchange: ''
  };

  handleChange (value) {
    this.setState({
      valueToExchange: value,
    });
    const { valueToExchange } = this.state;
    if (!valueToExchange) {
      this.props.clearExchangeForm();
    }
  }

  submitExchangeCalculation () {
    const { currencyFrom, currencyTo } = this.props;
    const { valueToExchange } = this.state;
    if (valueToExchange) {
      this.props.calculateExchange({
        currencyFromId: currencyFrom.id,
        currencyToId: currencyTo.id,
        value: valueToExchange,
      });
    }
  }

  render() {

    const { classes } = this.props;
    const { currencyFrom, currencyTo, result } = this.props;
    const { valueToExchange } = this.state;

    return (
      <div className="currency-exchange-component">
        <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="md" justify="center">
          {currencyFrom.id && currencyTo.id &&
            <Fragment>
              <Grid className="currency-boxes-container" container spacing={2} justify="center">
                <Grid item>
                  <TextField
                    id="currency-from"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label={currencyFrom.iso_code}
                    value={valueToExchange}
                    title={valueToExchange}
                    onChange={(event) => this.handleChange(event.target.value)}
                    onBlur={(event) => this.handleChange(event.target.value)}
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      min: 0,
                      max: 9999999,
                      startAdornment:
                        <InputAdornment position="start">{currencyFrom.symbol}</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    disabled
                    id="currency-to"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label={currencyTo.iso_code}
                    value={result}
                    title={result}
                    InputProps={{
                      startAdornment:
                        <InputAdornment position="start">{currencyTo.symbol}</InputAdornment>,
                    }}
                  />
                </Grid>
              </Grid>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => this.submitExchangeCalculation(e)}
                >
                  {trans('default.calculate')}
                </Button>
              </Typography>
            </Fragment>
          }
        </Container>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  currencyFrom: state.currencyReducer.currencyFrom,
  currencyTo: state.currencyReducer.currencyTo,
  conversionIndex: state.currencyReducer.conversionIndex,
  result: state.currencyReducer.result,
});

const mapDispatchToProps = {
  getDefaultExchangeCurrencies,
  calculateExchange,
  clearExchangeForm
};

Exchange.propTypes = ExchangePropTypes;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(exchangeStyles)(Exchange)),
);
