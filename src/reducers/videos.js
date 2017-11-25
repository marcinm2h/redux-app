import { CHANGE_ITEMS } from '../actions/videos';

export default (state = {}, { payload = {}, ...action }) => {
  switch (action.type) {
    case CHANGE_ITEMS:
      return {
        items: payload.items,
      };
    default:
      return state;
  }
};
