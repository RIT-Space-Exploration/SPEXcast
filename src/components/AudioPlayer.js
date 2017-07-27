import React, { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import Style from '../Style';
import Audio from 'react-audioplayer';

class AudioPlayer extends Component {
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
    const { playlist } = this.props;
    if (playlist.size < 1) return null;
    return (
      <div onClick={this.testMethod} className="audio-player">
        <Audio
          style={Style.episodeAudioPlayer}
          playlist={playlist.toJS()}
          color="#FF5722"
        />
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  playlist: PropTypes.instanceOf(Immutable.List)
};

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.audioPlayer.get('playlist')
  };
};

export default connect(mapStateToProps)(AudioPlayer);
