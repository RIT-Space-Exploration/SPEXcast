import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class SPEXHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { open: false};
  }

  handleMenuTouch() {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    const { open } = this.state;
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
         title="SPEXcast Soundboard"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
         onLeftIconButtonTouchTap={this.handleMenuTouch.bind(this)}
       >
       <Drawer
        docked={false}
        open={open}
        onRequestChange={(open) => this.setState({open})}>
        <MenuItem>TEXT</MenuItem>
        </Drawer>
       </AppBar>
       
      </MuiThemeProvider>
    );
  }
}

export default SPEXHeader;
