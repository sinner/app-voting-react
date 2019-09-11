import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createGenerateClassName, ThemeProvider } from '@material-ui/styles';

import 'axios-progress-bar/dist/nprogress.css';

import CreateStore from './Store/store';
import Routes from './Config/Routes';
import theme from './Themes/theme';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();

const store = CreateStore();
const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
  productionPrefix: 'crex-',
});

ReactDOM.render(
  <JssProvider generateClassName={generateClassName}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  </JssProvider>,
  document.querySelector('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
