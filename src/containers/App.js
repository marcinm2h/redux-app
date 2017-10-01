import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Counter} />
        <Route path="/test" component={() => <h1>Test</h1>} />
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
