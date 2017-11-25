import { createQueryString, fetchData } from '../utils';

const API_URL = 'https://www.googleapis.com/youtube/v3/';
const API_KEY = process.env.YT_API_KEY;
const ENDPOINTS = {
  SEARCH: 'search',
};

const createUrl = (endpoint, options) =>
  `${API_URL}${endpoint}${createQueryString({
    key: API_KEY,
    ...options,
  })}`;

const requestApi = (endpoint, query, options) => fetchData(createUrl(endpoint, query), options);

const search = (query, { part = 'snippet' } = {}) => requestApi(ENDPOINTS.search, { part, q: query });

export default {
  search,
};
