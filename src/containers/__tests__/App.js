/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('Renders App witouth crashing', () => {
  shallow(<App />);
});
