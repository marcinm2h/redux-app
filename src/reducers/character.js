import { CHARACTER_CHANGE } from '../actions/character';

export default (state = null, action = {}) => {
  switch (action.type) {
    case CHARACTER_CHANGE:
      return action.payload.character;
    default:
      return state;
  }
};
