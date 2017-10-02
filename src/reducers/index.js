import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import actionTypes from '../constants/actionTypes';

const character = (state = null, action = {}) => {
  switch (action.type) {
    case actionTypes.CHARACTER.CHANGE:
      return action.payload.character;
    default:
      return state;
  }
};

const characterInputValue = (state = '', action = {}) => {
  switch (action.type) {
    case actionTypes.CHARACTER_INPUT.CHANGE:
      return action.payload.value;
    default:
      return state;
  }
};

const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case actionTypes.COUNTER.ADD:
      return state + 1;
    case actionTypes.COUNTER.SUBSTRACT:
      return state - 1;
    default:
      return state;
  }
};

export const searchCharacter = characterId => dispatch => {
  fetch(`https://swapi.co/api/people/${characterId}/`)
    .then(response => response.json())
    .then(character => dispatch({ type: actionTypes.CHARACTER.CHANGE, payload: { character } }));
};

export default combineReducers({
  character,
  characterInputValue,
  counter,
  router: routerReducer,
});
