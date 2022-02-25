import siteData from '../data/siteData.json';

export function getResource({ resourceId, topicId }) {
  return siteData
    .find(({ id }) => id === topicId)
    .resources.find(({ id }) => id === resourceId);
}

export function getTopic(topicId) {
  return siteData.find(({ id }) => id === topicId);
}

export function getTopics() {
  return siteData;
}
