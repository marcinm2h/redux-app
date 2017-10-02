import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ADD, SUBSTRACT } from '../actions/counter';
import { characterChange, CHARACTER_CHANGE } from '../actions/character';
import { CHARACTER_INPUT_CHANGE } from '../actions/characterInput';

const character = (state = null, action = {}) => {
  switch (action.type) {
    case CHARACTER_CHANGE:
      return action.payload.character;
    default:
      return state;
  }
};

const characterInputValue = (state = '', action = {}) => {
  switch (action.type) {
    case CHARACTER_INPUT_CHANGE:
      return action.payload.value;
    default:
      return state;
  }
};

const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBSTRACT:
      return state - 1;
    default:
      return state;
  }
};

export const searchCharacter = characterId => dispatch => {
  fetch(`https://swapi.co/api/people/${characterId}/`)
    .then(response => response.json())
    .then(character => dispatch(characterChange(character)));
};

export default combineReducers({
  character,
  characterInputValue,
  counter,
  router: routerReducer,
});
