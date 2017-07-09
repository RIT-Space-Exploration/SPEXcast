import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import Style from './Style.js';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import { fetchEpisodes } from './actions/Episodes';
import { connect } from 'react-redux';
import Audio from 'react-audioplayer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
  },
});


class Episodes extends Component {
  constructor(props, context) {
      super(props, context);
      this.state = { episodes: null };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEpisodes());
  }

  renderEpisodeCard(episode) {
    const songObj = {
      name: episode.get('title'),
      src: episode.get('link')
    };
    return (
      <Card
        key={episode.get('title')}
        style={Style.episodeCard}  
      >
        <CardHeader
            title={`Released on ${episode.get('pubDate')}`}
            style={Style.cardHeader}
        />
        <CardTitle title={episode.get('title')} subtitle={episode.get('subtitle')} />
        <CardText>{episode.get('description')}</CardText>
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
    
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={Style.container}>
          <div style={Style.episodeContainer}>
            <h1>Episodes</h1> <br/>
            <h2>We are a group of passionate space fans from Rochester Institute of Technology</h2>
            {episodes && episodes.get('items').map(this.renderEpisodeCard)}
          </div>
        </div>
       </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes
  };
};

export default connect(mapStateToProps)(Episodes);