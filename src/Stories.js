import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'
import request from 'superagent'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': [], 'currentVote': [] };
   }

   componentDidMount(){
     var that = this;
     request
      .get('http://master.async_voter_production.app.push.drieapp.co/stories?state=active')
      .end(function(err, res){
       that.setState({"stories": JSON.parse(res.text)})
      })
   }

    mapOpenStoryItems(){
      if(this.state.stories.length > 0 ){
        return <Story
                  title={this.state.stories[0].name}
                  votes={this.state.stories[0].size}
                  url={this.state.stories[0].url}
                  id={this.state.stories[0]._id} />
      }
    }

    render() {
      return (
        <ul>
          {this.mapOpenStoryItems()}
        </ul>
      )
    }
}

export default Stories
