import React, { Component } from 'react';
import { fetchEpisodes } from '../actions/Episodes';
import SPEXHeader from '../components/SPEXHeader.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Style from '../Style.js';
import { connect } from 'react-redux';
import AudioPlayer from '../components/AudioPlayer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500
  }
});

class Main extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEpisodes());
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <SPEXHeader />
          <div style={Style.container}>
            {this.props.children}
          </div>
          <AudioPlayer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(Main);
