import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar';
import VideoList from '../VideoList';

// TODO: connect(({ loading }) => ({ loading}))(Loader);
const Loader = ({ children, loading }) => (loading ? <div>...loading</div> : children);

Loader.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

class Search extends PureComponent {
  render() {
    return (
      <div>
        <h1>Search</h1>
        <SearchBar placeholder="Search" />
        <Loader>
          <VideoList />
        </Loader>
      </div>
    );
  }
}

export default Search;
