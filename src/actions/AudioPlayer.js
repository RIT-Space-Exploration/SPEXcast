import ActionTypes from './ActionTypes';
import { getEpisodeIndexFromId } from '../utils/Episodes';

export function playEpisode(episodeId, episodes) {
  return {
    type: ActionTypes.START_PLAYING_EPISODE,
    episodeIndex: getEpisodeIndexFromId(episodeId, episodes)
  };
}

export const pauseEpisode = {
  type: ActionTypes.STOP_PLAYING_EPISODE
};

export const skipEpisodeForwards = {
  type: ActionTypes.SKIP_TO_NEXT_EPISODE
};

export const skipEpisodeBackwards = {
  type: ActionTypes.SKIP_TO_PREVIOUS_EPISODE
};
