import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deepOrange } from 'material-ui/colors';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import Headset from 'material-ui-icons/Headset';
import People from 'material-ui-icons/People';
import OpenInNew from 'material-ui-icons/OpenInNew';
import Home from 'material-ui-icons/Home';
import Toys from 'material-ui-icons/Toys';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Style from '../Style.js';

const muiTheme = createMuiTheme({
  palette: {
    accent1Color: deepOrange[500],
    primary1Color: deepOrange[500],
    primary2Color: deepOrange[500],
    primary3Color: deepOrange[500]
  }
});

class SPEXHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { open: false };
  }

  handleMenuTouch() {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="Menu"
              onClick={this.handleMenuTouch.bind(this)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              docked={false}
              open={open}
              onRequestChange={open => this.setState({ open })}
            >
              <MenuItem containerElement={<Link to="/home" />}>
                {<Home />}
                Home
              </MenuItem>
              <MenuItem containerElement={<Link to="/episodes" />}>
                {<Headset />}
                Episodes
              </MenuItem>
              <MenuItem containerElement={<Link to="/about" />}>
                {<People />}
                About Us
              </MenuItem>
              <MenuItem containerElement={<Link to="/soundboard" />}>
                {<Toys />}
                Soundboard
              </MenuItem>
              <MenuItem href={'http://spex.rit.edu/'}>
                {<OpenInNew />}SPEX Website
              </MenuItem>
            </Drawer>
            <Typography type="title" color="inherit">
              SPEXcast
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default SPEXHeader;
