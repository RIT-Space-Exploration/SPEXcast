import ActionTypes from './ActionTypes';

export function playEpisode(episode) {
  return {
    type: ActionTypes.START_PLAYING_EPISODE,
    episode: {
      name: episode.get('title'),
      src: episode.get('link')
    }
  };
}

export function addToPlaylist(episode) {
  return {
    type: ActionTypes.ADD_EPISODE_TO_PLAYLIST,
    episode: {
      name: episode.get('title'),
      src: episode.get('link')
    }
  };
}

export function playNext(episode) {
  return {
    type: ActionTypes.PLAY_EPISODE_NEXT,
    episode: {
      name: episode.get('title'),
      src: episode.get('link')
    }
  };
}
