import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 1, value: 0 },
      { id: 1, value: 0 },
      { id: 1, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => {
          return <p>{counter.id}</p>;
        })}
      </div>
    );
  }
}

export default Counters;
