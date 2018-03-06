import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {Card, CardTitle, CardText} from 'material-ui/Card';

export default class Firstpage extends Component {
    constructor(props){
        super(props);
        let that = this;
        this.state = {
            testText: 0,
        };
        this.firebase = this.props.firebase;
        this.firebase.database().ref('testData').once('value', function(snap){
            that.setState({
                testText: snap.val().text,
                testNum: snap.val().number,
            });
        });
    }

    displayText() {
        if(this.state.testText === 0) {
            return(
                <RefreshIndicator size={40} left={500} top={70} status="loading"/>
            );
        }
        else {
            return(
                <CardText>{this.state.testText}</CardText>
            );
        }
    }

    render() {
        return(
            <Card>
                <CardTitle title="Welcome to React"/>
                <CardText>
                To get started, edit <code>src/App.js</code> and save to reload.
                </CardText>
                {this.displayText()}
            </Card>
        )
    }
}
