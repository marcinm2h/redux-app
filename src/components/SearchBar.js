import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  onInput,
  onSearch,
  placeholder = '',
  value,
}) => (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        onSearch(value);
      }}
    >
      <input
        onInput={e => onInput(e.target.value)}
        placeholder={placeholder}
        type="text"
      />
      <button
        type="submit"
      >Search</button>
    </form>
  </div>
);

SearchBar.propTypes = {
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default SearchBar;
