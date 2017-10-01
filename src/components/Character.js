import React from 'react';
// import PropTypes from 'prop-types';

// const Character = ({ id, birthYear, name }) => (
//   <div>
//     <h2>Name: {name}</h2>
//     <h3>Id: {id}</h3>
//     <h3>Birth year: {birthYear}</h3>
//   </div>
// );

const Character = props => (
  <pre>
    {JSON.stringify(props, null, 2)}
  </pre>
);


// Character.propTypes = {
//   id: PropTypes.number.isRequired,
//   birthYear: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default Character;
