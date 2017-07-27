import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { fetchEpisodes } from '../actions/Episodes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Style from '../Style.js';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';
import Audio from 'react-audioplayer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500
  }
});

class Episodes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { episodes: null };
  }

  componentDidMount() {
    const { dispatch, lastUpdated, episodes } = this.props;
    if (lastUpdated <= Date.now() + 300000 || episodes.size <= 0) {
      dispatch(fetchEpisodes());
    }
  }

  renderEpisodeCard(episode) {
    const songObj = {
      name: episode.get('title'),
      src: episode.get('link')
    };
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
        <Audio
          playlist={[songObj]}
          style={Style.episodeAudioPlayer}
          color="#FF5722"
        />
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
  lastUpdated: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    episodes: state.episodes.get('episodes'),
    lastUpdated: state.episodes.get('lastUpdated')
  };
};

export default connect(mapStateToProps)(Episodes);
