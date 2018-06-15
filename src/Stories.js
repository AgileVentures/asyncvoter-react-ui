import React, { Component } from 'react';
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
       .get(window.baseApiUrl + '/stories')
      .end(function(err, res){
       that.setState({"stories": JSON.parse(res.text)})
      })
   }

    render() {
      if(this.state.stories.length > 0 ){
      var storyItems = this.state.stories.map((story) => {
        return <Story
                  key={story._id}
                  story={story}
                  update={this.updateComponent} />
      })
      }
      return (
        <ul>
          {storyItems}
        </ul>
      )
    }
}

export default Stories
