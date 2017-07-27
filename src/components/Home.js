import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import EpisodeCarousel from './EpisodeCarousel';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Style from '../Style.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500
  }
});

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="grid">
          <div>
            <h1>Welcome to SPEXcast</h1> <br />
            <h2>
              A podcast on the science and technology of space exploration
            </h2>
            <EpisodeCarousel />
          </div>
          <div>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'ritspex'
              }}
              options={{
                username: 'ritspex',
                height: '800'
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
