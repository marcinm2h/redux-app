import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VideosList from '../components/VideosList';

class VideoListContainer extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    const {
      items,
    } = this.props;

    return items
      ? (
        <div>
          <VideosList
            items={items}
          />
        </div>
      )
      : null;
  }
}

export default connect(
  ({ videos }) => ({ ...videos }),
)(VideoListContainer);
