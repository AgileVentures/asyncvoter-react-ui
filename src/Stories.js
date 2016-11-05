import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': waffleData };
    this.mapStoryItems = this.mapStoryItems.bind(this)
   }

    mapStoryItems(){
     return this.state.stories.map((story) => {
        return <Story
                  key={story.id}
                  title={story.githubMetadata.title}
                  url={story.githubMetadata.url} />
      })
    }

    render() {
      return (
        <ul>
          {this.mapStoryItems()}
        </ul>
      )
    }
}

export default Stories
