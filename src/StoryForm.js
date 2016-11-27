import React, { Component } from 'react';
import request from 'superagent'

class StoryForm extends Component {

    constructor(){
      super()
      this.state = {"voteTitle": "", "voteUrl": "", "voteTotal": 0}
      this.handleTitleChange = this.handleTitleChange.bind(this)
      this.handleUrlChange = this.handleUrlChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
      e.preventDefault()
      this.createStory()
    }

    handleTitleChange(e){
      this.setState({"voteTitle": e.target.value})
    }

    handleUrlChange(e){
      this.setState({"voteUrl": e.target.value})
    }

    createStory(){
      var that = this
      request.post('http://master.bass-seahorse-cod.app.push.drieapp.co/stories/')
      .set('Content-Type', 'application/json')
      .send({name: that.state.voteTitle, url: that.state.voteUrl, size: that.state.voteTotal})
      .end(function(err, res){
      })
    }

  render() {
    return (
      <div>
        Submit A Story For Voting
        <form onSubmit={this.handleSubmit}>
            <label>
              Title
              <input type="text" name="title" value={this.state.voteTitle} onChange={this.handleTitleChange}/>
            </label>
            <label>
              URL
              <input type="text" name="url" value={this.state.voteUrl} onChange={this.handleUrlChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default StoryForm;
