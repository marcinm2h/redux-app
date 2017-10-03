import { combineReducers } from 'redux';
import { ADD_TO_CACHE, CHARACTER_CHANGE, CHARACTER_INPUT_CHANGE } from '../actions/characters';

const character = (state = null, action = {}) => {
  switch (action.type) {
    case CHARACTER_CHANGE:
      return (state && state.id === action.payload.character.id)
        ? state
        : action.payload.character;
    default:
      return state;
  }
};

const input = (state = '1', action = {}) => {
  switch (action.type) {
    case CHARACTER_INPUT_CHANGE:
      return action.payload.value;
    default:
      return state;
  }
};

const cache = (state = { characters: [], ids: [] }, action = {}) => {
  switch (action.type) {
    case ADD_TO_CACHE:
      return {
        characters: [...state.characters, action.payload.character],
        ids: [...state.ids, action.payload.character.id],
      };
    default:
      return state;
  }
};

export default combineReducers({
  input,
  character,
  cache,
});
