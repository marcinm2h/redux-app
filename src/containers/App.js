import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

import Counter from './Counter';
import Characters from './Characters';

const YtPlayer = () => (
  <div>
    <YouTube
      videoId="2g811Eo7K8U"
    />
  </div>
);

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Counter} />
        <Route path="/test" component={() => <h1>Test</h1>} />
        <Route path="/characters" component={Characters} />
        <Route path="/yt-player" component={YtPlayer} />
        <div>
          <Link to="/">Home</Link> |
          <Link to="/test">Test</Link> |
          <Link to="/characters">Characters</Link> |
          <Link to="/yt-player">YT Player</Link>
        </div>
      </div>
    );
  }
}

export default AppContainer;
