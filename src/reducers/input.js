import { CHANGE_INPUT } from '../actions/input';

export default (state = '', { payload = {}, ...action = {} }) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return payload.input;
    default:
      return state;
  }
};
