import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Value = styled.span`
  color: ${props => (props.children < 0 ? 'palevioletred' : 'lightblue')};
  ${props => props.copy && css`
    border-radius: 15px;
    border: 2px solid palevioletred;
    display: block;
    font-family: sans-serif;
    font-size: 222px;
    padding: 40px;
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: -1;
  `};
`;

const Counter = ({
  counter,
  onAdd,
  onSubstract,
}) => (
  <div>
    <Value>{counter}</Value>
    <Value copy>{counter}</Value>
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
