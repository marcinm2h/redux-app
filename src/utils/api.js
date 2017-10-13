import { createQueryString, fetchData } from './';

const YT_API_URL = 'https://www.googleapis.com/youtube/v3/';
const YT_API_KEY = process.env.YT_API_KEY;

const createUrl = (endpoint, options) =>
  `${YT_API_URL}${endpoint}${createQueryString({
    key: YT_API_KEY,
    ...options,
  })}`;

const requestApi = (endpoint, query, options) => fetchData(createUrl(endpoint, query), options);

const search = (query, { part = 'snippet' } = {}) => requestApi('search', { part, q: query });

const characterRequest = async (url, options) => {
  const x = await search('redux');
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

export default {
  getCharacter,
  search,
};
