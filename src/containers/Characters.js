import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchCharacter } from '../reducers';
import Characters from '../components/Characters';

class CharactersContainer extends PureComponent {
  static propTypes = {
    character: PropTypes.object,
    searchCharacter: PropTypes.func.isRequired,
  };

  state = {
    characterId: undefined, // TODO: move to reducer
  }

  render() {
    const { character, searchCharacter } = this.props;
    const { characterId } = this.state;

    return (
      <div>
        <Characters
          characterId={characterId}
          character={character}
          onChangeCharacterId={characterId => this.setState(() => ({
            characterId: Number(characterId),
          }))}
          onCharacterSearch={searchCharacter}
        />
      </div>
    );
  }
}

export default connect(
  ({ character = null }) => ({ character }),
  {
    searchCharacter,
  },
)(CharactersContainer);
