import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from 'components/App/App';
import rootReducer from 'redux/rootReducer';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { THEME } from 'GlobalStyles';

const store = createStore(rootReducer);

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById('root'),
);
