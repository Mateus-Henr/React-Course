import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#282c34",
        }}
      >
        <button
          className="btn btn-primary btn-big m2"
          onClick={() => onReset()}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
