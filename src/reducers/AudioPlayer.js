import ActionTypes from '../actions/ActionTypes';
import Immutable from 'immutable';

const DEFAULT = Immutable.Map({
  currentEpisodeIndex: -1,
  isPlaying: false
});

export default function AudioPlayer(state = DEFAULT, action) {
  const { type, episodeIndex } = action;

  switch (type) {
    case ActionTypes.START_PLAYING_EPISODE:
      return state.merge({
        currentEpisodeIndex: episodeIndex,
        isPlaying: true
      });
    case ActionTypes.STOP_PLAYING_EPISODE:
      return state.merge({
        isPlaying: false
      });
    case ActionTypes.SKIP_TO_NEXT_EPISODE:
      return state.merge({
        currentEpisodeIndex: state.get('currentEpisodeIndex') + 1
      });

    default:
      return state;
  }
}
