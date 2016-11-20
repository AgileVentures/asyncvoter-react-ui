import React, { Component } from 'react';
import request from 'superagent'

class Story extends Component {
    constructor(props){
      super(props);
    }

    sendVote(){
      console.log("SENT")
      var that = this
      request.put('http://master.bass-seahorse-cod.app.push.drieapp.co/stories/5831d6ae2c42ad002d5deea7')
      .set('Content-Type', 'application/json')
      .send('{"size": "10"}')
      .end(function(err, res){
        console.log(res)
      })
    }

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
