import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from 'firebase';
import Firstpage from './components/Firstpage';
import config from './keys/key';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import config from './keys/key';
import Firstpage from './components/Firstpage';
import RowDice from './components/rowDice';
>>>>>>> bf5f1a29df9c777e52f29b9c8f3bc698aba557a3

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
<<<<<<< HEAD

        <Route exact path="/" render={props=><Firstpage firebase={this.firebase}/>}/>

=======
        <Switch>
          <Route exact path="/" render={props=><Firstpage firebase={this.firebase}/>}/>
          <Route exact path="/yay" render={props=><RowDice/>}/>
        </Switch>
>>>>>>> bf5f1a29df9c777e52f29b9c8f3bc698aba557a3
      </BrowserRouter>
    );
  }
};
