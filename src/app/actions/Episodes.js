import ActionTypes from './ActionTypes';
import * as RssApi from '../api/episodes';
import FeedMe from 'feedme';
import http from 'http';
import { Readable } from 'stream';
import Immutable from 'immutable';

export function fetchEpisodes() {
  return dispatch => {
    dispatch({
      type: ActionTypes.FETCH_EPISODES_ATTEMPTED,
    });
    http.get('https://spexcast.csh.rit.edu/', function(res) {
      var parser = new FeedMe(true);
      res.pipe(parser);
      parser.on('end', function() {
        dispatch({
          type: ActionTypes.FETCH_EPISODES_SUCCEEDED,
          data: Immutable.fromJS(parser.done()),
        });
      });
    });
  };
}



