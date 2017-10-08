import React, { Component } from 'react';
import { fetchEpisodes } from '../actions/Episodes';
import SPEXHeader from '../components/SPEXHeader.js';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { deepOrange } from 'material-ui/colors';
import Style from '../Style.js';
import { connect } from 'react-redux';
import AudioPlayer from '../components/AudioPlayer';

const muiTheme = createMuiTheme({
  palette: {
    primary1Color: deepOrange[500]
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
          <div style={Style.container}>{this.props.children}</div>
          <AudioPlayer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(Main);
