/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SPEXHeader from './SPEXHeader.js';
import audioFiles from './AudioFiles.js';
const styles = {
  container: {
    textAlign: 'center',
  },
  gridList: {
     width: 500,
     height: 650,
     margin: 'auto',
     overflowY: 'auto',
   },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


let audioTags = [];

const setupAudioTags = () => {
   audioTags = audioFiles.map(file => {
    let soundFile = document.createElement("audio");
    soundFile.preload = 'auto';

    let src = document.createElement('source');
    src.src = `audio/${file.fileName}`;
    soundFile.appendChild(src);

    soundFile.load();
    soundFile.volume = 0.000000;
    //soundFile.play();
    return soundFile;
  })
};

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    setupAudioTags();
    this.state = {
      open: false,
    };
  }

  handlePlayAudio = (fileName) => {
    console.log(fileName);
    const audioIndex = audioTags.findIndex((tag) => {
      return tag.currentSrc === `${tag.baseURI}audio/${fileName}`;
    })
    audioTags[audioIndex].currentTime = 0.01;
    audioTags[audioIndex].volume =1.000;
    audioTags[audioIndex].play();
    }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
         <div style={styles.container}>
           <SPEXHeader />
          <div>
            <GridList
              cellHeight={250}
              style={styles.gridList}
            >
              <Subheader>December</Subheader>
              {audioFiles.map((soundbite) => (
                <GridTile
                  key={soundbite.fileName}
                  title={soundbite.name}
                  subtitle={soundbite.description}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  onTouchTap={() => {this.handlePlayAudio(soundbite.fileName)}}
                >
                <img src={'img/spexcast.png'} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
