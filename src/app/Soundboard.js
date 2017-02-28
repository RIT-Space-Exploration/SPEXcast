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
import FileDownload from 'material-ui/svg-icons/file/file-download';
import audioFiles from './AudioFiles.js';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  gridList: {
     overflowY: 'auto',
     margin: 'auto',
     maxWidth: '90%',
   },
   gridTile: {
     width: 250,
     height: 250,
     margin: '5em'
   }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


let audioTags = [];
const baseURI = window.location.origin;

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

class Soundboard extends Component {
  constructor(props, context) {
    super(props, context);

    setupAudioTags();
     this.state = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight,
    };
  }

  updateDimensions = () =>{
        this.setState({
          width: window.innerWidth || document.body.clientWidth,
          height: window.innerHeight || document.body.clientHeight,
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
    componentDidMount = () =>{
        window.addEventListener("resize", this.updateDimensions);
    };
    componentWillUnmount = () =>{
        window.removeEventListener("resize", this.updateDimensions);
    };

  handlePlayAudio = (fileName) => {
    console.log(fileName);
    const audioIndex = audioTags.findIndex((tag) => {
      return tag.currentSrc === `${baseURI}/audio/${fileName}`;
    })
    audioTags[audioIndex].currentTime = 0.01;
    audioTags[audioIndex].volume = 1.000;
    audioTags[audioIndex].play();
  }

  render() {
    const { columnCount } = this.state;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
         <div style={styles.container}>
           <GridList
              cellHeight={250}
              style={styles.gridList}
              cols={columnCount}
            >
              <Subheader>Click below to play</Subheader>
              {audioFiles.map((soundbite) => (
                <GridTile
                  key={soundbite.fileName}
                  title={soundbite.name}
                  subtitle={soundbite.description}
                  actionIcon={
                    <IconButton
                    href={`audio/${soundbite.fileName}`}>
                      <FileDownload
                       color="white"/>
                       </IconButton>}
                  onTouchTap={() => {this.handlePlayAudio(soundbite.fileName)}}
                >
                <img src={'img/spexcast.png'} />
                </GridTile>
              ))}
            </GridList>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Soundboard;
