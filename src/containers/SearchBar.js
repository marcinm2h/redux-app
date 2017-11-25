import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeInput } from '../actions/input';
import { search } from '../actions/videos';
import SearchBar from '../components/SearchBar';

class SearchBarContainer extends PureComponent {
  static propTypes = {
    changeInput: PropTypes.func.isRequired,
    input: PropTypes.string,
    placeholder: PropTypes.string,
    search: PropTypes.func.isRequired,
  };

  render() {
    const {
      changeInput,
      input,
      placeholder,
      search,
    } = this.props;

    return (
      <div>
        <SearchBar
          placeholder={placeholder}
          value={input}
          onInput={changeInput}
          onSearch={search}
        />
      </div>
    );
  }
}

export default connect(
  ({ input }) => ({ input }),
  {
    changeInput,
    search,
  },
)(SearchBarContainer);
