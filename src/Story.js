import React, { Component } from 'react';

class Story extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div className="individual-story">
          <li>Title: {this.props.title}</li>
          <li>Votes: {this.props.votes} </li>
          <li>URL: <a target='_blank' href={this.props.url}>{this.props.url}</a></li>
        <br></br>
        </div>
      )
    }
}

export default Story
