import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class SPEXHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  render() {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
         title="SPEXcast Soundboard"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
       />
      </MuiThemeProvider>
    );
  }
}

export default SPEXHeader;
