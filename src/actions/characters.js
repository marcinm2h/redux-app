import api from '../utils/api';
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
    api.getCharacter(characterId) // const character = await api.getCharacter(characterId)
      .then(({ data, error }) => {
        if (error) {
          dispatch({ type: 'FETCH_CHARACTER_FAILED', payload: { characterId } });
        } else {
          const character = { id: characterId, ...data };
          dispatch(addToCache(character));
          dispatch(characterChange(character));
        }
      });
  }
};
