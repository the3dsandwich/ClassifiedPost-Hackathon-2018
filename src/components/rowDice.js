import React, { Component } from 'react';

export default class RowDice extends Component {
    constructor(props){
        super(props);
        this.state = {
            canClick: true,
        };
    }

    handleClick() {
        this.setState({
            canClick: false,
        });
    }

    render() {
        if (this.state.canClick) {
            return ( 
                <div class="ui center aligned container">
                    <div class="ui hidden divider"></div>
                    
                    <iframe title="#" width="256" height="144" src="https://www.youtube.com/embed/CGbcLHoYlw8?autoplay=1&rel=0&controls=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <button onClick={this.handleClick.bind(this)}>嗨我是善維</button>
                </div>
            );
        }
        else {
            return ( 
                <div class="ui center aligned container">
                    <div class="ui hidden divider"></div>
                    <h3>Wiiiiiiii</h3>
                    
                    <iframe title="#" width="256" height="144" src="https://www.youtube.com/embed/U_Zz-q1wn-I?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            );
        }
    }
};
