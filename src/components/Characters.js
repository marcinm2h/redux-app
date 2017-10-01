import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

const Characters = ({
  onCharacterSearch,
  onChangeCharacterInputValue,
  value,
  character = null,
}) => (
  <div>
    <input
      type="number"
      defaultValue={value || '1'}
      min="1"
      onChange={e => onChangeCharacterInputValue(e.target.value)}
    />
    <button
      onClick={() => onCharacterSearch(value)}
    >Search</button>
    {character
      ? <Character {...character} />
      : null
    }
  </div>
);

Characters.propTypes = {
  onCharacterSearch: PropTypes.func.isRequired,
  onChangeCharacterInputValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  character: PropTypes.object,
};

export default Characters;
