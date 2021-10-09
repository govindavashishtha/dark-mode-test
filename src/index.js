import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  // store provider
  <Provider store={store}>
    <AppContainer>
    <Routes />
  </AppContainer>
  </Provider>,
  document.getElementById('root')
);
