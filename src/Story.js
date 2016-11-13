import React, { Component } from 'react';

class Story extends Component {
    constructor(props){
      super(props);
    }

    // sendVote(){
    //   fetch('https://api.waffle.io/cards/5825a9ed9a9ad41e008b1570', {
    //       method: 'PUT'
    //     })
    //     .then((response) => {
    //     return response.json()
    //   }).then((stories) =>{
    //     this.setState({'stories': stories, 'currentVote': stories[0]})
    //   })
    //   console.log("I HAVE VOTED")
    // }

    render() {
      return (
        <div className="individual-story">
          <li>Title: {this.props.title}</li>
          <li>Votes: {this.props.votes} </li>
          <li>URL: <a target='_blank' href={this.props.url}>{this.props.url}</a></li>
          <li>ID: {this.props.id} </li>
          <button onClick={this.sendVote}>Vote</button>
        <br></br>
        </div>
      )
    }
}

export default Story
