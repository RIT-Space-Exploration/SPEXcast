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

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const audioFiles = [
  {
    name: 'Sigh',
    fileName: 'sigh.mp3',
    description: 'T.J. is not thrilled trying to describe SLS'
  },
  {
    name: 'It\'s Hard!',
    fileName: 'its_hard.mp3',
    description: 'It is really hard to be positive of SLS'
  },
  {
    name: 'Completely Shit on SLS',
    fileName: 'sls.mp3',
    description: 'Completely shitting on SLS'
  },
  {
    name: 'So Ladies...',
    fileName: 'so_ladies.mp3',
    description: 'Space Seduction'
  }
];
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
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>SPEXcast Soundboard</h1>
          <h2>Dank Memes</h2>
          <div>
            {audioFiles.map(soundbite => (

                <Card onTouchTap={() => {this.handlePlayAudio(soundbite.fileName)}}>
                  <CardTitle title={soundbite.name}/>
                  <CardText>
                    {soundbite.description}
                  </CardText>
                  <CardActions>
                    <FlatButton label="download" />
                  </CardActions>
                </Card>
            ))}
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
