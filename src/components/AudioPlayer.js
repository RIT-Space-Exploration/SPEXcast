import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import {
  playEpisode,
  pauseEpisode,
  skipEpisodeForwards,
  skipEpisodeBackwards
} from '../actions/AudioPlayer';
import Style from '../Style';
import Audio from 'react-audioplayer';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.testMethod = this.testMethod.bind(this);
  }
  /*
  componentDidMount() {
    const { onPlay, onPause, onSkipForward, onSkipBackward } = this.props;
    findDOMNode(this.audioComponent).addEventListener('audio-play', onPlay);
    findDOMNode(this.audioComponent).addEventListener('audio-pause', onPause);
    findDOMNode(this.audioComponent).addEventListener(
      'audio-skip-to-next',
      onSkipForward
    );
    findDOMNode(this.audioComponent).addEventListener(
      'audio-skip-to-previous',
      onSkipBackward
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      if (nextProps.isPlaying && !this.props.isPlaying) {
        findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
      }
      if (!nextProps.isPlaying && this.props.isPlaying) {
        findDOMNode(this.audioComponent).dispatchEvent(
          new Event('audio-pause')
        );
      }
    }
  }*/

  testMethod() {
    console.log(this.audioComponent);
    // findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
  }

  oldRender() {
    const { episodeIndex, episodes } = this.props;
    if (episodeIndex < 0 || !episodes) return null;
    const episode = episodes.get(episodeIndex);
    const songObj = {
      name: episode.get('title'),
      src: episode.get('link')
    };
    return (
      <div onClick={this.testMethod} className="audio-player">
        <Audio
          style={Style.episodeAudioPlayer}
          playlist={[songObj]}
          color="#FF5722"
          ref={audioComponent => {
            this.audioComponent = audioComponent;
          }}
        />
      </div>
    );
  }

  render() {
    const { episodes } = this.props;
    if (episodes.size < 1) return null;
    const playlist = episodes
      .map(episode => {
        return {
          name: episode.get('title'),
          src: episode.get('link')
        };
      })
      .toJS();
    return (
      <div onClick={this.testMethod} className="audio-player">
        <Audio
          style={Style.episodeAudioPlayer}
          playlist={playlist}
          color="#FF5722"
          ref={audioComponent => {
            this.audioComponent = audioComponent;
          }}
        />
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  episodeIndex: PropTypes.number.isRequired,
  episodes: PropTypes.instanceOf(Immutable.List),
  isPlaying: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSkipForward: PropTypes.func.isRequired,
  onSkipBackward: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    episodes: state.episodes.get('episodes'),
    episodeIndex: state.audioPlayer.get('currentEpisodeIndex'),
    isPlaying: state.audioPlayer.get('isPlaying')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPlay: () => {
      dispatch(playEpisode(ownProps.episodes.get(ownProps.episodeIndex)));
    },
    onPause: () => {
      dispatch(pauseEpisode);
    },
    onSkipForward: () => {
      dispatch(skipEpisodeForwards);
    },
    onSkipBackward: () => {
      dispatch(skipEpisodeBackwards);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
