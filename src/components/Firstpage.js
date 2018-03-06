import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class Firstpage extends Component {
    constructor(props){
        super(props);
        let that = this;
        this.state = {

        };
        this.firebase = this.props.firebase;
        this.firebase.database().ref('testData').once('value', function(snap) {
            that.setState({
                testText: snap.val().text,
                testNum: snap.val().number,
            });
        });
    }

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