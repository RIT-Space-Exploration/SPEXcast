import React, {Component} from 'react';
import SPEXHeader from './SPEXHeader.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import Style from './Style.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
  },
});

class Main extends Component {
    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={Style.container}>
                    <SPEXHeader />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;