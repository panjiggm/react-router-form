import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  handleIncrement = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary bt-sm m-1"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-1 badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag, index) => (
  //         <li key={index}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
