import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

const Characters = ({
  onCharacterSearch,
  onChangeCharacterId,
  characterId = 1,
  character = null,
}) => (
  <div>
    <input type="number" defaultValue={characterId} min="1" onChange={e => onChangeCharacterId(e.target.value)} />
    <button
      onClick={() => onCharacterSearch(characterId)}
    >Search</button>
    {character
      ? <Character {...character} />
      : null
    }
  </div>
);

Characters.propTypes = {
  onCharacterSearch: PropTypes.func.isRequired,
  onChangeCharacterId: PropTypes.func.isRequired,
  characterId: PropTypes.number,
  character: PropTypes.object,
};

export default Characters;
