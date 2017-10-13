import qs from 'qs';

export const createQueryString =
  (query, addQueryPrefix = true) => qs.stringify(query, { addQueryPrefix });

export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();

      return { data };
    }
    const error = await response.text();

    return { error };
  } catch (error) {
    return { error };
  }
};
