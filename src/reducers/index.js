import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import characters from './characters';
import counter from './counter';

export default combineReducers({
  characters,
  counter,
  router,
});
