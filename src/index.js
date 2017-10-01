import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import reducer from './reducers';

// import { push } from 'react-router-redux';
// store.dispatch(push('/foo'))

const history = createHistory();

const middleware = [
  routerMiddleware(history),
  thunk,
];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App} />
    </ConnectedRouter >
  </Provider>
), document.getElementById('root'));
