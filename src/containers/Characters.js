import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { inputChange, searchCharacter } from '../actions/characters';
import Characters from '../components/Characters';

class CharactersContainer extends PureComponent {
  static propTypes = {
    character: PropTypes.object,
    changeCharacterInputValue: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    searchCharacter: PropTypes.func.isRequired,
  };

  render() {
    const {
      character,
      changeCharacterInputValue,
      input,
      searchCharacter,
    } = this.props;

    return (
      <div>
        <Characters
          value={input}
          character={character}
          onChangeCharacterInputValue={changeCharacterInputValue}
          onCharacterSearch={searchCharacter}
        />
      </div>
    );
  }
}

export default connect(
  ({ characters: { input, character } }) => ({ input, character }),
  {
    searchCharacter,
    changeCharacterInputValue: inputChange,
  },
)(CharactersContainer);
