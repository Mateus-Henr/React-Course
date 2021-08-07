import React, { Component } from "react";

class Counter extends Component {
  state = {
    imageUrl: "https://picsum.photos/500",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold",
    width: "auto",
    height: "auto",
  };

  centerStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous props: ", prevProps);
    console.log("Previous state: ", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-big m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-big m2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tahs</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  renderImg() {
    return <img style={this.centerStyle} src={this.state.imageUrl} />;
  }
}

export default Counter;
