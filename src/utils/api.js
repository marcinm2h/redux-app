const sendRequest = (url, options) =>
  fetch(url, options)
    .then(response => (
      response.ok
        ? response.json()
        : response.text().then(error => Promise.reject(error))))
    .then(data => ({ data }))
    .catch(error => ({ error }));

const getCharacter = characterId => sendRequest(`https://swapi.co/api/people/${characterId}/`);

export default { getCharacter };
