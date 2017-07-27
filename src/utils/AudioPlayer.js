import Immutable from 'immutable';

export function setEpisodeToStartOfQueue(episodes, newEpisode) {
  // if episode is first, return
  if (episodes.get(0) === newEpisode) return episodes;

  // if episode is in queue, remove and set first
  const episodeIndex = episodes.find(episode => {
    return episode.src === newEpisode.src;
  });

  if (episodeIndex > 0) {
    return episodes.delete(episodeIndex).insert(0, newEpisode);
  }

  return episodes.insert(0, newEpisode);
}

export function addEpisodeToQueue(episodes, newEpisode) {
  const episodeIndex = episodes.find(episode => {
    return episode.src === newEpisode.src;
  });

  if (episodeIndex > 0) return episodes;

  // otherwise add to queue
  return episodes.push(newEpisode);
}

export function addEpisodeNextInQueue(episodes, newEpisode) {
  const episodeIndex = episodes.find(episode => {
    return episode.src === newEpisode.src;
  });

  if (episodeIndex === 1) return episodes;

  // otherwise add second in queue
  return episodes.insert(1, newEpisode);
}
