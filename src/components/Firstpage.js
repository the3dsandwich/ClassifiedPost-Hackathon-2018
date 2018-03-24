import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TB from './titlebar';

export default class Firstpage extends Component {
    constructor(props){
        super(props);
        let that = this;
        this.state = {
            testText: 0,
        };
        this.firebase = this.props.firebase;
        this.firebase.database().ref('/testData').once('value', function(snap){      // grab data from firebase once
            that.setState({
                testText: snap.val().text,
            });
        });
        this.firebase.database().ref('/testData').on('value', function(snap){        // grab data from firebase whenever data changes
            that.setState({
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
                <CardText>"{this.state.testText}" was retrieved once from firebase and "{this.state.testNum}" is updated from firebase whenever it was changed</CardText>
            );
        }
    }

    handlePlusClick() {
        this.firebase.database().ref('/testData/number').set(this.state.testNum + 1); // modify (set) data in firebase
    }

    handleMinusClick() {
        this.firebase.database().ref('/testData/number').set(this.state.testNum - 1); // modify (set) data in firebase
    }

    render() {
        return(
            <Card>
                <CardTitle title="Welcome to React"/>
                <CardText>
                To get started, edit <code>src/App.js</code> and save to reload.
                </CardText>
                {this.displayText()}
                <FlatButton label="+" onClick={this.handlePlusClick.bind(this)}/>
                <FlatButton label="-" onClick={this.handleMinusClick.bind(this)}/>
                <TB name="yay"/>
                <TB name="woohoo"/>
            </Card>
        )
    }
}
