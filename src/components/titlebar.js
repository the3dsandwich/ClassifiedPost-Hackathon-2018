import React, { Component } from 'react';

export default class TB extends Component {
    constructor(props){
        super(props);
        let that = this;
        this.state = {
            name : this.props.name
        };
    }

    render() {
        return(
            <h1>this is titlebar.js {this.state.name}</h1>
        )
    }
}
