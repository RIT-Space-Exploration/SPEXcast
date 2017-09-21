import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { fetchEpisodes } from '../actions/Episodes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Style from '../Style.js';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import QueuePlayNext from 'material-ui/svg-icons/av/queue-play-next';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import { playEpisode, addToPlaylist, playNext } from '../actions/AudioPlayer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500
  }
});

class Episodes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { episodes: null };
    this.renderEpisodeCard = this.renderEpisodeCard.bind(this);
  }

  componentDidMount() {
    const { lastUpdated, episodes, handleUpdateEpisodes } = this.props;
    if (lastUpdated <= Date.now() + 300000 || episodes.size <= 0) {
      handleUpdateEpisodes();
    }
  }

  renderEpisodeCard(episode) {
    const { handlePlay, handleQueue, handlePlayNext } = this.props;
    return (
      <Card key={episode.get('title')} style={Style.episodeCard}>
        <CardHeader
          title={`Released on ${episode.get('pubDate')}`}
          style={Style.cardHeader}
        />
        <CardTitle
          title={episode.get('title')}
          subtitle={episode.get('subtitle')}
        />
        <CardText>
          {episode.get('description')}
        </CardText>
        <IconButton onClick={() => handlePlay(episode)}>
          <PlayArrow color="black" />
        </IconButton>
        <IconButton onClick={() => handlePlayNext(episode)}>
          <QueuePlayNext color="black" />
        </IconButton>
        <IconButton onClick={() => handleQueue(episode)}>
          <PlaylistAdd color="black" />
        </IconButton>
        <IconButton href={episode.get('link')} download>
          <FileDownload color="black" />
        </IconButton>
      </Card>
    );
  }

  render() {
    const { episodes } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={Style.container}>
          <div style={Style.episodeContainer}>
            <h1>Episodes</h1> <br />
            <h2>
              Here you can find the complete list of episodes released by
              SPEXcast.
            </h2>
            {episodes && episodes.map(this.renderEpisodeCard)}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Episodes.propTypes = {
  episodes: PropTypes.instanceOf(Immutable.List).isRequired,
  lastUpdated: PropTypes.number.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handleQueue: PropTypes.func.isRequired,
  handlePlayNext: PropTypes.func.isRequired,
  handleUpdateEpisodes: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    episodes: state.episodes.get('episodes'),
    lastUpdated: state.episodes.get('lastUpdated')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePlay: episode => {
      dispatch(playEpisode(episode));
    },
    handleQueue: episode => {
      dispatch(addToPlaylist(episode));
    },
    handlePlayNext: episode => {
      dispatch(playNext(episode));
    },
    handleUpdateEpisodes: () => {
      dispatch(fetchEpisodes());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
