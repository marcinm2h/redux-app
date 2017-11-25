import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({
  channelTitle,
  description,
  id,
  thumbnailSize = 'default',
  thumbnails,
  title,
}) => (
  <div>
    <div>
      {/* TODO: Thumbnail component */}
      <img
        src={thumbnails[thumbnailSize].url}
        alt={title}
      />
    </div>
    <hr />
    <div>
      {channelTitle}:
      {title}
      {id}
      {description}
    </div>
  </div>
);

VideoItem.propTypes = {
  channelTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnailSize: PropTypes.string,
  thumbnails: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoItem;
