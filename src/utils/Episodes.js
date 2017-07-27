import Immutable from 'immutable';

export function getEpisodeIndexFromId(episodeId, episodes) {
  return episodes.findIndex(episode => {
    return episode.get('id') === episodeId;
  });
}
