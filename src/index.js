import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
