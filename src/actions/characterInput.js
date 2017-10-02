// FIXME: this should be character.input() action
export const CHARACTER_INPUT_CHANGE = 'CHARACTER_INPUT_CHANGE';
export const characterInputChange = (value) => ({
  type: CHARACTER_INPUT_CHANGE,
  payload: { value },
});
