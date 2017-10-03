import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import App from './containers/App';
import reducer from './reducers';

const history = createHistory();

const middleware = [
  routerMiddleware(history),
  thunk,
];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

// const { push } = require('react-router-redux');
// window.navigate = (path) => store.dispatch(push(path));

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
