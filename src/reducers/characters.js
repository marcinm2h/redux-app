import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

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

const cache = (state = { items: [], ids: [] }, action = {}) => {
  switch (action.type) {
    case ADD_TO_CACHE:
      return {
        items: [...state.items, action.payload.character],
        ids: [...state.ids, action.payload.character.id],
      };
    default:
      return state;
  }
};

// FIXME: seems like too much complexity here - maybe drop it for now
export const getCacheIds = state => state.characters.cache.ids;
const getCacheItems = state => state.characters.cache.items;
const getInput = state => state.characters.input;
export const getSelectedCacheCharacter = createSelector(
  [getCacheItems, getInput],
  (items, characterId) => items.find(({ id }) => id === characterId),
);

export default combineReducers({
  cache,
  character,
  input,
});
