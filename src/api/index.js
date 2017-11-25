import { createQueryString, fetchData } from '../utils';

const YT_API_URL = 'https://www.googleapis.com/youtube/v3/';
const YT_API_KEY = process.env.YT_API_KEY;

const createUrl = (endpoint, options) =>
  `${YT_API_URL}${endpoint}${createQueryString({
    key: YT_API_KEY,
    ...options,
  })}`;

const requestApi = (endpoint, query, options) => fetchData(createUrl(endpoint, query), options);

const search = (query, { part = 'snippet' } = {}) => requestApi('search', { part, q: query });

export default {
  search,
};
