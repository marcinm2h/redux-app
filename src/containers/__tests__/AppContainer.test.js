/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppContainer from '../AppContainer';

Enzyme.configure({ adapter: new Adapter() }); // TODO: run this once somewhere else!

it('Renders App witouth crashing', () => {
  shallow(<AppContainer />);
});
