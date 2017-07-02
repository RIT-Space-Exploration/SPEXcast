import React, {Component} from 'react';
import SPEXHeader from './SPEXHeader.js';
import Style from './Style.js';
import Team from './Team.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
class About extends Component {
    constructor(props, context) {
        super(props, context);
    }

    someFunction() {
        console.log("clicked");
    }

    render() {
        return(
            <div style={Style.container}>
                <h1>Meet the team</h1> <br/>
                <h2>We are a group of passionate space fans from Rochester Institute of Technology</h2>
                {Team.map((host)=> (
                    <Card key={host.name}>
                        <CardHeader
                            title={host.name}
                            subtitle={host.catchphrase}
                            avatar={`img/${host.imgFile}`}
                            style={Style.cardHeader}
                            onClickk={this.someFunction}
                        />
                        <CardMedia
                            overlay={<CardTitle title={`Favorite Spacecraft: ${host.favoriteSpacecraft}`} subtitle={`Specializations: ${host.specialization}`} />}
                        >
                            <img src={`img/${host.spacecraftImg}`} />
                        </CardMedia>
                        <CardTitle title={host.name} subtitle={host.major} />
                        <CardText>{host.bio}</CardText>
                    </Card>
                ))}
            </div>
        );
    }
}

export default About;