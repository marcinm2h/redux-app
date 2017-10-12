const sendRequest = async (url, options) => {
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
