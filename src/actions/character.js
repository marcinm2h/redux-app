// FIXME: this should be character.input() action
export const CHARACTER_CHANGE = 'CHARACTER_CHANGE';
export const characterChange = (character) => ({
  type: CHARACTER_CHANGE,
  payload: { character },
});
