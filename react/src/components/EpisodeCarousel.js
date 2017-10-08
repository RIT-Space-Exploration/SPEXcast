import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import Style from '../Style';
import { GridList, GridListTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui-icons/StarBorder';

class EpisodeCarousel extends Component {
  render() {
    const { episodes } = this.props;
    if (episodes.size <= 0) return null;
    return (
      <div style={Style.Carousel}>
        {
          <GridList style={Style.gridList} cols={3}>
            {episodes.take(3).map(episode => (
              <GridListTile
                key={episode.get('link')}
                title={episode.get('title')}
                actionIcon={
                  <IconButton>
                    <StarBorder color="rgb(0, 188, 212)" />
                  </IconButton>
                }
                titleStyle={Style.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img alt="" src={'img/spexcast.png'} />
              </GridListTile>
            ))}
          </GridList>
        }
      </div>
    );
  }
}

EpisodeCarousel.propTypes = {
  episodes: PropTypes.instanceOf(Immutable.List).isRequired
};

const mapStateToProps = state => {
  return {
    episodes: state.episodes.get('episodes')
  };
};

export default connect(mapStateToProps)(EpisodeCarousel);
