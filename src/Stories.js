import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': waffleData };
    this.mapOpenStoryItems = this.mapOpenStoryItems.bind(this)
   }

    mapOpenStoryItems(){
     return this.state.stories.map((story) => {
       if(story.githubMetadata.state=="open"){
        return <Story
                  key={story.id}
                  title={story.githubMetadata.title}
                  votes={story.__v}
                  url={story.githubMetadata.html_url} />
       }
     })
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
