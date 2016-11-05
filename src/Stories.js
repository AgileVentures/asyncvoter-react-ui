import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': waffleData };
    this.storyItems = this.storyItems.bind(this);
   }

   storyItems(){
     return waffleData[0]
   }

    render() {
      return (
        <ul>
          {this.state.stories.map((story) => {
            return <Story key={story.id} title={story.githubMetadata.title} />
          })}
        </ul>
      )
    }
}

export default Stories
