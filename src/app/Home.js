import React, {Component} from 'react';
import SPEXHeader from './SPEXHeader.js';
import EpisodeCarousel from './EpisodeCarousel';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import Style from './Style.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
  },
});

class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div style={Style.container}>
                <h1>Welcome to SPEXcast</h1> <br/>
                <h2>A podcast on the science and technology of space exploration</h2>
                <EpisodeCarousel />
            </div>
        );
    }
}

export default Home;