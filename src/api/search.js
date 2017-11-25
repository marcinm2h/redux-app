import request, { ENDPOINTS } from './request';

const mapItem = ({
  id: {
    videoId,
    channelId: itemChannelId,
  },
  snippet: {
    channelId,
    channelTitle,
    description,
    thumbnails,
    title,
  },
}) => ({
  channelId,
  channelTitle,
  description,
  thumbnails,
  title,
  id: videoId || itemChannelId,
}); // TODO: reusable Item model for components

const mapData = ({ items, nextPageToken, prevPageToken }) => ({
  items: items.map(mapItem),
  nextPageToken,
  prevPageToken,
});

export default (query, { part = 'snippet', ...params } = {}) =>
  request(ENDPOINTS.SEARCH, { part, q: query, ...params })
    .then(({ data, errors }) => (errors
      ? { errors }
      : { data: mapData(data) }));
