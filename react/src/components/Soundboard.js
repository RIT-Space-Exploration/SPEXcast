import React, { Component } from 'react';
import { deepOrange } from 'material-ui/colors';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/List/ListSubheader';
import FileDownload from 'material-ui-icons/FileDownload';
import audioFiles from '../utils/AudioFiles.js';
import Style from '../Style.js';

const muiTheme = createMuiTheme({
  palette: {
    accent1Color: deepOrange[500]
  }
});

let audioTags = [];
const baseURI = window.location.origin;

const setupAudioTags = () => {
  audioTags = audioFiles.map(file => {
    let soundFile = document.createElement('audio');
    soundFile.preload = 'auto';

    let src = document.createElement('source');
    src.src = `audio/${file.fileName}`;
    soundFile.appendChild(src);

    soundFile.load();
    soundFile.volume = 0.0;
    //soundFile.play();
    return soundFile;
  });
};

class Soundboard extends Component {
  constructor(props, context) {
    super(props, context);

    setupAudioTags();
    this.state = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    };
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    });
  };
  updateColumnCount = () => {
    const { width } = this.state;
    this.setState({
      columnCount: width / 250
    });
  };
  componentWillMount = () => {
    this.updateDimensions();
    this.updateColumnCount();
  };
  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  handlePlayAudio = fileName => {
    console.log(fileName);
    const audioIndex = audioTags.findIndex(tag => {
      return tag.currentSrc === `${baseURI}/audio/${fileName}`;
    });
    audioTags[audioIndex].currentTime = 0.01;
    audioTags[audioIndex].volume = 1.0;
    audioTags[audioIndex].play();
  };

  render() {
    const { columnCount } = this.state;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={Style.container}>
          <GridList cellHeight={250} style={Style.gridList} cols={columnCount}>
            <Subheader>Click below to play</Subheader>
            {audioFiles.map(soundbite => (
              <GridTile
                key={soundbite.fileName}
                title={soundbite.name}
                subtitle={soundbite.description}
                actionIcon={
                  <IconButton href={`audio/${soundbite.fileName}`} download>
                    <FileDownload color="white" />
                  </IconButton>
                }
                onTouchTap={() => {
                  this.handlePlayAudio(soundbite.fileName);
                }}
              >
                <img alt="" src={'img/spexcast.png'} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Soundboard;
