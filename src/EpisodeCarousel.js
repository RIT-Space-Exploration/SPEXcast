import React, {Component} from 'react';
import Style from './Style'
// import { GridList, GridTile } from 'material-ui/GridList';

class Episodes extends Component {

  render() {
    return(
      <div style={Style.Carousel}>
        {/*<GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>*/}
        <h1>Episode Carousel</h1>
      </div>
    );
  }
}

export default Episodes;