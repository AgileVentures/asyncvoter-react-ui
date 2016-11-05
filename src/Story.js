import React, { Component } from 'react';

class Story extends Component {
    constructor(props){
      super(props);
      this.report = this.report.bind(this)
    }

    report(){
      console.log(this.props)
    }

    render() {
      return (
        <li onClick={this.report}>{this.props.title}</li>
      )
    }
}

export default Story
