import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const character = (state = null, action = {}) => {
  switch (action.type) {
    case 'CHANGE_CHARACTER':
      return action.payload.character;
    default:
      return state;
  }
};

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

export const searchCharacter = characterId => dispatch => {
  fetch(`https://swapi.co/api/people/${characterId}/`)
    .then(response => response.json())
    .then(character => dispatch({ type: 'CHANGE_CHARACTER', payload: { character } }));
};

export default combineReducers({
  character,
  counter,
  router: routerReducer,
});
