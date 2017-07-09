import ActionTypes from '../actions/ActionTypes';
import Immutable from 'immutable';

const DEFAULT = Immutable.Map({
  episodes: Immutable.List(),
  lastUpdated: Date.now(),
});

export default function Episodes(state = DEFAULT, action) {
  const { type, episodes } = action;

  switch(type) {
    case ActionTypes.FETCH_EPISODES_SUCCEEDED:
      return state.merge({
        episodes: episodes.get('items'),
        lastUpdated: Date.now()
      });

    default:
      return state;
  }
}