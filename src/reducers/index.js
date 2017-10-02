import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import character from './character';
import counter from './counter';
import { CHARACTER_INPUT_CHANGE } from '../actions/characterInput';

// TODO: should be part of character reducer
const characterInputValue = (state = '1', action = {}) => {
  switch (action.type) {
    case CHARACTER_INPUT_CHANGE:
      return action.payload.value;
    default:
      return state;
  }
};

export default combineReducers({
  character,
  characterInputValue,
  counter,
  router: routerReducer,
});
