import React, { Component } from 'react';
import waffleData from './data/stories.js'
import Story from './Story.js'

class Stories extends Component {

   constructor(props) {
    super(props);
    this.state = {'stories': [], 'currentVote': [] };
    this.mapOpenStoryItems = this.mapOpenStoryItems.bind(this)
    this.mapCurrentStory = this.mapCurrentStory.bind(this)
   }

    componentDidMount(){
      fetch('https://api.waffle.io/AgileVentures/AsyncVoter/cards').then((response) => {
        return response.json()
      }).then((stories) =>{
        this.setState({'stories': stories, 'currentVote': stories[0]})
      })
    }

    mapOpenStoryItems(){
     return this.state.stories.map((story, i) => {
       if(story.githubMetadata.state=="open"){
        return <Story
                  key={i}
                  title={story.githubMetadata.title}
                  votes={story.__v}
                  url={story.githubMetadata.html_url} />
       }
     })
    }

    mapCurrentStory(){
     return <Story
              title={this.state.stories[0].githubMetadata.title}
              votes={this.state.stories[0].__v}
              url={this.state.stories[0].githubMetadata.html_url} />
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
