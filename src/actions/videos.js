import api from '../api/index';

export const CHANGE_ITEMS = 'CHANGE_ITEMS';

export const changeItems = items => ({
  type: CHANGE_ITEMS,
  payload: { items },
});

export const search = (query, options = {}) => async dispatch => {
  // dispatch(loading()); -> state.loading === true
  try {
    const { data, error } = await api.search(query, options);
    console.log(error);

    dispatch(changeItems(data.items)); // -> loading === false
  } catch (error) {
    console.log(error);
  }
};
