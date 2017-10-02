import { ADD, SUBSTRACT } from '../actions/counter';

export default (state = 0, action = {}) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBSTRACT:
      return state - 1;
    default:
      return state;
  }
};
