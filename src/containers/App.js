import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Counter from './Counter';
import Characters from './Characters';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Counter} />
        <Route path="/test" component={() => <h1>Test</h1>} />
        <Route path="/characters" component={Characters} />
        <div>
          <Link to="/">Home</Link> | <Link to="/test">Test</Link> | <Link to="/characters">Characters</Link>
        </div>
      </div>
    );
  }
}

export default AppContainer;
