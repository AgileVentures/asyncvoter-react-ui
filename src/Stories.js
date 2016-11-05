import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': waffleData };
   }

    render() {
      var storyItems = this.state.stories.map((story) => {
        return <Story
                  key={story.id}
                  title={story.githubMetadata.title}
                  url={story.githubMetadata.url} />
      })

      return (
        <ul>
          {storyItems}
        </ul>
      )
    }
}

export default Stories
