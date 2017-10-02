import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { add, substract } from '../actions/counter';

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
    onAdd: add,
    onSubstract: substract,
  },
)(CounterContainer);
