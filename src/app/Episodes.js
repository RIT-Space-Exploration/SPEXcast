import React, {Component} from 'react';
import SPEXHeader from './SPEXHeader.js';
import Style from './Style.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { fetchEpisodes } from './actions/Episodes';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

class Episodes extends Component {
  constructor(props, context) {
      super(props, context);
      this.state = { episodes: null };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEpisodes());
  }


  render() {
    const { episodes } = this.props;
    return(
      <div style={Style.episodeContainer}>
        <h1>Episodes</h1> <br/>
        <h2>We are a group of passionate space fans from Rochester Institute of Technology</h2>
        {episodes && episodes.get('items').map((episode)=> (
          <Card key={episode.get('title')}>
            <CardHeader
                title={episode.get('pubDate')}
                style={Style.cardHeader}
            />
            <CardTitle title={episode.get('title')} subtitle={episode.get('subtitle')} />
            <CardText>{episode.get('description')}</CardText>
            <ReactAudioPlayer
              src={episode.get('link')}
            />
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes
  };
};

export default connect(mapStateToProps)(Episodes);