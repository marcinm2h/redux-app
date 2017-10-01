import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

class CounterContainer extends PureComponent {
  render() {
    return (
      <Counter {...this.props} />
    );
  }
}

export default connect(
  ({ counter }) => ({
    counter,
  }),
  {
    onAdd: () => ({ type: 'ADD' }),
    onSubstract: () => ({ type: 'SUBSTRACT' }),
  },
)(CounterContainer);
