import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBSTRACT':
      return state - 1;
    default:
      return state;
  }
};

export default combineReducers({
  counter,
  router: routerReducer,
});
