import { combineReducers } from 'redux';
import Episodes from './Episodes';
import AudioPlayer from './AudioPlayer';

export default combineReducers({
  episodes: Episodes,
  audioPlayer: AudioPlayer
});
