import React, { Component } from "react";

class Clock extends Component {
  state = { currentTime: new Date().toLocaleTimeString() };

  componentDidMount() {
    this.intervalID = setInterval(() => this.clock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  clock() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return <p>It's {this.state.currentTime}</p>;
  }
}

export default Clock;
