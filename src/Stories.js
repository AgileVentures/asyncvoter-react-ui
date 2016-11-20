import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'
import request from 'superagent'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': [], 'currentVote': [] };
    this.updateComponent = this.updateComponent.bind(this)
   }

   componentDidMount(){
     this.updateComponent()
   }

   updateComponent(){
     var that = this;
     request
      .get('http://master.bass-seahorse-cod.app.push.drieapp.co/stories')
      .end(function(err, res){
       that.setState({"stories": JSON.parse(res.text)})
      })
   }

    mapOpenStoryItems(){
      if(this.state.stories.length > 0 ){
        return <Story
                  title={this.state.stories[2].name}
                  votes={this.state.stories[2].size}
                  url={this.state.stories[2].url}
                  update={this.updateComponent}
                  id={this.state.stories[2]._id} />
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
