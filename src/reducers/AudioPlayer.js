import ActionTypes from '../actions/ActionTypes';
import Immutable from 'immutable';
import {
  setEpisodeToStartOfQueue,
  addEpisodeToQueue,
  addEpisodeNextInQueue
} from '../utils/AudioPlayer';

const DEFAULT = Immutable.Map({
  playlist: Immutable.List()
});

export default function AudioPlayer(state = DEFAULT, action) {
  const { type, episode } = action;

  switch (type) {
    case ActionTypes.START_PLAYING_EPISODE:
      return state.merge({
        playlist: setEpisodeToStartOfQueue(state.playlist, episode)
      });
    case ActionTypes.ADD_EPISODE_TO_PLAYLIST:
      return state.merge({
        playlist: addEpisodeToQueue(state.playlist, episode)
      });
    case ActionTypes.PLAY_EPISODE_NEXT:
      return state.merge({
        playlist: addEpisodeNextInQueue(state.playlist, episode)
      });
    default:
      return state;
  }
}
