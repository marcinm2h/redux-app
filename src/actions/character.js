// FIXME: this should be character.input() action
export const CHARACTER_CHANGE = 'CHARACTER_CHANGE';
export const characterChange = (character) => ({
  type: CHARACTER_CHANGE,
  payload: { character },
});

export const searchCharacter = characterId => dispatch => {
  fetch(`https://swapi.co/api/people/${characterId}/`)
    .then(response => response.json())
    .then(character => dispatch(characterChange(character)));
};
