import React, { Component } from 'react';
import Api from './api';
import { Input } from 'semantic-ui-react'
import { Grid, Image ,Item, Segment} from 'semantic-ui-react'

export default class Firstpage extends Component {
    constructor(props){
        super(props);
        let that = this;
        this.state = {
            allReply: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    displayAPI() {
        let that = this;
        Api.getViews(that.state.title).then(function(res) {
            console.log("res = " + res)
            that.setState({
                allReply: that.state.allReply.concat({title: that.state.title, viewcount: res})
            },function(){
                console.log(that.state)
            })
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
            <div>
            <Grid centered columns={2}>
            <Grid.Column>
            <form className="F"onSubmit={this.handleSubmit}>
                <Input fluid icon='search' placeholder="enter title" value={this.state.title} onChange={this.handleTitleChange}/>
                <button className="B">Submit</button>
            </form>
            </Grid.Column>
            </Grid>
                        <Grid centered columns={2}>
                        
            <Grid.Column>
                {
                    this.state.allReply ? this.state.allReply.map(function(o){
                        console.log('hi')
                        return <Segment>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>{o.title}</Item.Header>
                                <Item.Meta>{o.viewcount}</Item.Meta>
                            </Item.Content>
                        </Item>
                        </Segment>
                    }) : null
                }
            
            </Grid.Column>
            </Grid>
            
            </div>
        )
    }
}
