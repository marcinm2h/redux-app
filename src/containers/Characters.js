import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchCharacter } from '../reducers';
import actionTypes from '../constants/actionTypes';
import Characters from '../components/Characters';

class CharactersContainer extends PureComponent {
  static propTypes = {
    character: PropTypes.object,
    changeCharacterInputValue: PropTypes.func.isRequired,
    characterInputValue: PropTypes.string.isRequired,
    searchCharacter: PropTypes.func.isRequired,
  };

  render() {
    const {
      character,
      changeCharacterInputValue,
      characterInputValue,
      searchCharacter,
    } = this.props;

    return (
      <div>
        <Characters
          value={characterInputValue}
          character={character}
          onChangeCharacterInputValue={changeCharacterInputValue}
          onCharacterSearch={searchCharacter}
        />
      </div>
    );
  }
}

export default connect(
  ({
    character,
    characterInputValue,
  }) => ({
    character,
    characterInputValue,
  }),
  {
    searchCharacter,
    changeCharacterInputValue: (value) => ({
      type: actionTypes.CHARACTER_INPUT.CHANGE,
      payload: { value },
    }),
  },
)(CharactersContainer);
