import { getCacheIds, getSelectedCacheCharacter } from '../reducers/characters';

export const ADD_TO_CACHE = 'ADD_TO_CACHE';
export const addToCache = (character) => ({
  type: ADD_TO_CACHE,
  payload: { character },
});

export const CHARACTER_CHANGE = 'CHARACTER_CHANGE';
export const characterChange = (character) => ({
  type: CHARACTER_CHANGE,
  payload: { character },
});

export const CHARACTER_INPUT_CHANGE = 'CHARACTER_INPUT_CHANGE';
export const inputChange = (value) => ({
  type: CHARACTER_INPUT_CHANGE,
  payload: { value },
});

export const searchCharacter = characterId => (dispatch, getState) => {
  const state = getState();
  if (getCacheIds(state).includes(characterId)) {
    dispatch(characterChange(getSelectedCacheCharacter(state)));
  } else {
    fetch(`https://swapi.co/api/people/${characterId}/`) // TODO: handle errors and "not found" response TODO2: add abstraction over fetch - api.getCharacter(id)
      .then(response => response.json())
      .then(data => {
        const character = { id: characterId, ...data };
        dispatch(addToCache(character));
        dispatch(characterChange(character));
      });
  }
};
