import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideosList = ({ items }) => (
  <div>
    {items.map(item => (
      <VideoItem
        {...item}
        key={item.videoId}
      />
    ))}
  </div>
);

VideosList.propTypes = {
  items: PropTypes.array.isRequired, // TODO: video = PropTypes.shape...
};

export default VideosList;
