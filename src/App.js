import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from 'firebase';
import Firstpage from './components/Firstpage';
import config from './keys/key';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.firebase = firebase.initializeApp(config);
  }

  render() {
    return (
      <BrowserRouter>

        <Route exact path="/" render={props=><Firstpage firebase={this.firebase}/>}/>

      </BrowserRouter>
    );
  }
};
