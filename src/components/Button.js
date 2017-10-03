import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick } = {}) => (
  <button
    onClick={onClick}
  >{children}</button>
);

Button.PropTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
