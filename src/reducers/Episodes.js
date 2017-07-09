import ActionTypes from '../actions/ActionTypes';
import Immutable from 'immutable';

const DEFAULT = Immutable.Map();

export default function Episodes(state = DEFAULT, action) {
  const { type, data } = action;

  switch(type) {

    case ActionTypes.FETCH_EPISODES_SUCCEEDED:
      return data;

    default:
      return state;
  }
}