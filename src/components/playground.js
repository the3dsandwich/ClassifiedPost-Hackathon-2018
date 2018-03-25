import React, { Component } from 'react';
import Api from './api';

export default class Firstpage extends Component {
    constructor(props){
        super(props);
        let that = this;
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    displayAPI() {
        let that = this;
        Api.getViews(that.state.title).then(function(res) {
            console.log("res = " + res)
            that.setState({
                viewcount: res
            });
        });
    }

    handleTitleChange(e) {
        e.preventDefault();
        this.setState({
            title : e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.displayAPI();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter title" value={this.state.title} onChange={this.handleTitleChange}/>
                <button>Submit</button>
                <p>{this.state.viewcount}</p>
            </form>
        )
    }
}
