import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({
  counter,
  onAdd,
  onSubstract,
}) => (
  <div>
    {counter}
    <button onClick={onAdd}>+</button>
    <button onClick={onSubstract}>-</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubstract: PropTypes.func.isRequired,
};

export default Counter;
