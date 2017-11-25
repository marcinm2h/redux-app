import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBar from '../SearchBar';

class Search extends PureComponent {
  static propTypes = {
    searchResults: PropTypes.object,
  };

  render() {
    const { searchResults } = this.props;

    return (
      <div>
        <h1>Search</h1>
        <SearchBar placeholder="Search" />
        <div>
          {/* <SearchResults /> */}
          {JSON.stringify(searchResults, null, 2)}
        </div>
      </div>
    );
  }
}

export default connect(
  () => ({
    searchResults: {},
  }),
  {},
)(Search);
