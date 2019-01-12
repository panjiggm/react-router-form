import React from "react";

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.myTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    return this.stop();
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  stop = () => {
    clearInterval(this.myTimer);
  };

  render() {
    return (
      <div>
        <h3>Hello {this.state.date.toLocaleTimeString()}</h3>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default Course;
