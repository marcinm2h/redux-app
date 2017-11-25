import { createQueryString, fetchData } from '../utils';

const API_URL = 'https://www.googleapis.com/youtube/v3/';
const API_KEY = process.env.YT_API_KEY;
export const ENDPOINTS = {
  SEARCH: 'search',
};

const createUrl = (endpoint, options) =>
  `${API_URL}${endpoint}${createQueryString({
    key: API_KEY,
    ...options,
  })}`;

export default (endpoint, query, options) => fetchData(createUrl(endpoint, query), options);
