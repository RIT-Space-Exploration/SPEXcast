import React, {Component} from 'react';
import { Link } from 'react-router'
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Headset from 'material-ui/svg-icons/hardware/headset';
import People from 'material-ui/svg-icons/social/people';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import Home from 'material-ui/svg-icons/action/home';
import Toys from 'material-ui/svg-icons/hardware/toys';
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: deepOrange500,
    primary2Color: deepOrange500,
    primary3Color: deepOrange500,
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

  handleMenuItemTouch(event) {
    console.log('Menu Item Touched');
    console.log(event);
  }

  render() {
    const { open } = this.state;
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
         title="SPEXcast"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
         onLeftIconButtonTouchTap={this.handleMenuTouch.bind(this)}
       >
       <Drawer
        docked={false}
        open={open}
        onRequestChange={(open) => this.setState({open})}>
        <MenuItem
          rightIcon={<Home/>}
          onTouchTap={this.handleMenuItemTouch.bind(this)}
          containerElement={<Link to="/home" />}>
          Home
        </MenuItem>
        <MenuItem
          rightIcon={<Headset/>}
          onTouchTap={this.handleMenuItemTouch.bind(this)}
          containerElement={<Link to="/episodes" />}>
          Episodes
        </MenuItem>
        <MenuItem
          rightIcon={<People/>}
          onTouchTap={this.handleMenuItemTouch.bind(this)}
          containerElement={<Link to="/about" />}>
          About Us
        </MenuItem>
        <MenuItem
          rightIcon={<Toys/>}
          onTouchTap={this.handleMenuItemTouch.bind(this)}
          containerElement={<Link to="/soundboard" />}>
          Soundboard
        </MenuItem>
        <MenuItem
          rightIcon={<OpenInNew/>}
          onTouchTap={this.handleMenuItemTouch.bind(this)}
          href={'http://spex.rit.edu/'}>
          SPEX Website
        </MenuItem>
        </Drawer>
       </AppBar>
       
      </MuiThemeProvider>
    );
  }
}

export default SPEXHeader;
