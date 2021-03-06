import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Style from '../Style.js';
import Team from '../utils/Team.js';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500
  }
});

class About extends Component {
  someFunction() {
    console.log('clicked');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={Style.container}>
          <h1>Meet the team</h1> <br />
          <h2>
            We are a group of passionate space fans from Rochester Institute of
            Technology
          </h2>
          {Team.map(host =>
            <Card key={host.name}>
              <CardHeader
                title={host.name}
                subtitle={host.catchphrase}
                avatar={`img/${host.imgFile}`}
                style={Style.cardHeader}
                onClick={this.someFunction}
              />
              <CardMedia
                overlay={
                  <CardTitle
                    title={`Favorite Spacecraft: ${host.favoriteSpacecraft}`}
                    subtitle={`Specializations: ${host.specialization}`}
                  />
                }
              >
                <img alt="" src={`img/${host.spacecraftImg}`} />
              </CardMedia>
              <CardTitle title={host.name} subtitle={host.major} />
              <CardText>
                {host.bio}
              </CardText>
            </Card>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default About;
