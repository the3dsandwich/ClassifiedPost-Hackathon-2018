import React, { Component } from 'react';
<<<<<<< HEAD
import logo from '../logo.svg';
import '../App.css';
=======
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {Card, CardTitle, CardText} from 'material-ui/Card';
>>>>>>> bf5f1a29df9c777e52f29b9c8f3bc698aba557a3

export default class Firstpage extends Component {
    constructor(props){
        super(props);
        let that = this;
        this.state = {
<<<<<<< HEAD

        };
        this.firebase = this.props.firebase;
        this.firebase.database().ref('testData').once('value', function(snap) {
=======
            testText: 0,
        };
        this.firebase = this.props.firebase;
        this.firebase.database().ref('testData').once('value', function(snap){
>>>>>>> bf5f1a29df9c777e52f29b9c8f3bc698aba557a3
            that.setState({
                testText: snap.val().text,
                testNum: snap.val().number,
            });
        });
    }

<<<<<<< HEAD
    render() {

        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>{this.state.testText}</p>
            </div>
        );
    }
};
=======
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
>>>>>>> bf5f1a29df9c777e52f29b9c8f3bc698aba557a3
