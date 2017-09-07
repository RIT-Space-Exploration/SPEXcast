import ActionTypes from './ActionTypes';
import Immutable from 'immutable';
import jQuery from 'jquery';

export function fetchEpisodes() {
  return dispatch => {
    dispatch({
      type: ActionTypes.FETCH_EPISODES_ATTEMPTED
    });
    jQuery.getFeed({
      url: 'https://spexcast.csh.rit.edu/',
      success: function(feed) {
        dispatch({
          type: ActionTypes.FETCH_EPISODES_SUCCEEDED,
          episodes: Immutable.fromJS(feed)
        });
      }
    });
  };
}
