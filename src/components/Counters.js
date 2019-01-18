import React, { Component, Fragment } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <Fragment>
        <button onClick={onReset} className="btn btn-success btn-sm m-1">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
