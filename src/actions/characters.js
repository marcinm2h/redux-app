import api from '../api';
import { getCacheIds, getSelectedCacheCharacter } from '../reducers/characters';

// TODO: delete it ->
const characterRequest = async (url, options) => {
  const x = await api.search('redux');
  console.log(x);
  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();
    return { data };
  }
  const error = await response.text();
  return { error };
};

const getCharacter = characterId => characterRequest(`https://swapi.co/api/people/${characterId}/`);
// <- delete it

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

export const searchCharacter = id => async (dispatch, getState) => {
  const state = getState();
  if (getCacheIds(state).includes(id)) {
    dispatch(characterChange(getSelectedCacheCharacter(state)));
  } else {
    // dispatch(loading()); -> state.loading === true
    const { data, error } = await getCharacter(id);

    if (error) {
      dispatch({ type: 'FETCH_CHARACTER_FAILED', payload: { id } }); // -> loading === false
    } else {
      const character = { id, ...data };
      dispatch(addToCache(character)); // -> loading === false
      dispatch(characterChange(character));
    }
  }
};
