import React, { Component } from 'react';
import request from 'superagent'

class Story extends Component {
    constructor(props){
      super(props);
      this.state = {"vote": this.props.votes};
    }

    sendVote(vote){
      alert("Thanks for your vote")
      let voteParams = vote.toString()
      this.setState({"vote": voteParams})
      request.put('http://master.bass-seahorse-cod.app.push.drieapp.co/stories/5831d6ae2c42ad002d5deea7')
      .set('Content-Type', 'application/json')
      .send({size: voteParams})
      .end(function(err, res){
      })
      this.props.update()
    }

    render() {
      return (
        <div className="individual-story">
          <li>Title: {this.props.title}</li>
          <li>Votes: {this.props.votes} </li>
          <li>URL: <a target='_blank' href={this.props.url}>{this.props.url}</a></li>
          <li>ID: {this.props.id} </li>
          <button onClick={() => this.sendVote(1)}>Vote 1 </button>
          <button onClick={() => this.sendVote(2)}>Vote 2 </button>
          <button onClick={() => this.sendVote(3)}>Vote 3 </button>
        <br></br>
        </div>
      )
    }
}

export default Story
