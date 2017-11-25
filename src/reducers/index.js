import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import characters from './characters';
import counter from './counter';
import input from './input';
import videos from './videos';

export default combineReducers({
  characters,
  counter,
  input,
  router,
  videos,
});
