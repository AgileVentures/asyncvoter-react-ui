import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': waffleData };
   }

   // storyItems(){
   //   this.state.stories.map((story) => {
   //    return (
   //    <Story
   //      id={story.id}
   //      url={story.githubMetadata.html_url}
   //      title={story.githubMetadata.title}
   //      state={story.githubMetadata.state}
   //      voteCount={story.__v}
   //    >
   //    )
   //   }
   // }

    render() {
      return (
        <ul><Story /></ul>
      )
    }
}

export default Stories
