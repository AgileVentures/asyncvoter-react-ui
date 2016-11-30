import React, { Component } from 'react';
import request from 'superagent'

class Story extends Component {
    constructor(props){
      super(props);
      this.state = {"vote": this.props.votes, "voteCount" : 0, "voteAverage": 0};
      this.sendVote = this.sendVote.bind(this)
    }

    sendVote(vote){
      alert("Thanks for your vote")
      let voteParams = vote.toString()
      let storyId = this.props.story._id
      this.setState({"vote": voteParams})
      request.post('http://master.bass-seahorse-cod.app.push.drieapp.co/stories/' + storyId + "/votes")
      .set('Content-Type', 'application/json')
      .send({size: voteParams})
      .end(function(err, res){
      })
      this.props.update()
    }

    componentDidMount(){
      this.fetchNumberOfVotes()
      this.averageVote()
    }

    fetchNumberOfVotes(){
     var that = this;
     let storyId = this.props.story._id
     request
      .get('http://master.bass-seahorse-cod.app.push.drieapp.co/stories/' + storyId + "/votes")
      .end(function(err, res){
       that.setState({"voteCount": res.body.length})
      })
    }

    averageVote(){
     var that = this;
     let storyId = this.props.story._id
     request
      .get('http://master.bass-seahorse-cod.app.push.drieapp.co/stories/' + storyId + "/votes")
      .end(function(err, res){
        let totalVotes = 0
        let response = JSON.parse(res.text)
        response.forEach((vote) => {
          totalVotes+= parseInt(vote.size)
        })
        let average = totalVotes / response.length
        that.setState({"voteAverage": average})
      })
    }

    render() {
      return (
        <div className="individual-story">
          <li>Title: {this.props.story.name}</li>
          <li><a href={"http://master.bass-seahorse-cod.app.push.drieapp.co/stories/" + this.props.story._id + "/votes"}>Votes: {this.state.voteCount}</a></li>
          <li>Average Vote: {this.state.voteAverage}</li>
          <li>URL: <a target='_blank' href={this.props.story.url}>{this.props.story.url}</a></li>
          <li>ID: {this.props.story._id} </li>
          <button onClick={() => this.sendVote(1)}>Vote 1 </button>
          <button onClick={() => this.sendVote(2)}>Vote 2 </button>
          <button onClick={() => this.sendVote(3)}>Vote 3 </button>
        <br></br>
        </div>
      )
    }
}

export default Story
