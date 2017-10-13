// import { youtube } from 'googleapis';

// const api = youtube('v3');
const YT_API_KEY = process.env.YT_API_KEY;

// const query = query => new Promise((resolve, reject) => {
//   api.search.list({
//     auth: YT_API_KEY,
//     part: 'snippet',
//     q: query,
//   }, (error, data) => {
//     if (error) {
//       reject(error);
//     } else {
//       resolve(data);
//     }
//   });
// });

// const promisify = fn => params => new Promise((resolve, reject) => {
//   fn({
//     auth: YT_API_KEY,
//     ...params,
//   }, (error, data) => {
//     if (error) {
//       reject(error);
//     } else {
//       resolve(data);
//     }
//   });
// });

// const search = promisify(api.search.list);


const sendRequest = async (url, options) => {
  // const q = await search('redux');
  // console.log(q);
  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();
    return { data };
  }
  const error = await response.text();
  return { error };
};

const getCharacter = characterId => sendRequest(`https://swapi.co/api/people/${characterId}/`);

export default { getCharacter };

// const { youtube } = require('googleapis');
// const yt = youtube('v3');

// const resp = yt.search.list({
//   auth: API_KEY,
//   part: 'snippet',
//   q: 'Dan Abramov'
// }, (error, response) => {
//   console.log(response);
// });
