import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      org: this.props.org,
      position: this.props.position,
      description: this.props.desc,
      dates: this.props.dates,
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.org}</div>
        <div>{this.state.position}</div>
        <div>{this.state.description}</div>
        <div>{this.state.dates}</div>
      </div>
    );
  }
}

export default Experience;
