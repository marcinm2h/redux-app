import React from 'react';
import PropTypes from 'prop-types';

// {
//   "kind": "youtube#searchResult",
//   "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/6i4LWzsLKrUAuHDWtWXzXBN_qtQ\"",
//   "id": {
//     "kind": "youtube#video",
//     "videoId": "9G1SRhlJQ-s"
//   },
//   "snippet": {
//     "publishedAt": "2011-03-02T18:28:32.000Z",
//     "channelId": "UC1Y-hzgOlv29BXYhMm_-qMw",
//     "title": "Wykop  effect,czyli jak włamać się na serwer UW",
//     "description": "Atak hackerski na Łódzki Urząd Wojewódzki \"hacked by wykop.pl\"",
//     "thumbnails": {
//       "default": {
//         "url": "https://i.ytimg.com/vi/9G1SRhlJQ-s/default.jpg",
//         "width": 120,
//         "height": 90
//       },
//       "medium": {
//         "url": "https://i.ytimg.com/vi/9G1SRhlJQ-s/mqdefault.jpg",
//         "width": 320,
//         "height": 180
//       },
//       "high": {
//         "url": "https://i.ytimg.com/vi/9G1SRhlJQ-s/hqdefault.jpg",
//         "width": 480,
//         "height": 360
//       }
//     },
//     "channelTitle": "NajlepszeFilmyKurwo",
//     "liveBroadcastContent": "none"
//   }
// }

const VideoItem = ({
  channelTitle,
  description,
  thumbnailSize = 'default',
  thumbnails,
  title,
  videoId,
}) => (
  <div>
    <div>
      <img
        src={thumbnails[thumbnailSize].url}
        alt={title}
      />
    </div>
    <hr />
    <div>
      {channelTitle}:
      {title}
      {videoId}
      {description}
    </div>
  </div>
);

VideoItem.propTypes = {
  channelTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnailSize: PropTypes.string,
  thumbnails: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default VideoItem;
