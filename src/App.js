import React, { Component } from "react";

// import Register from "./components/register";
import Course from "./components/Course";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>React 101</h1>
          <Course />
        </header>
      </div>
    );
  }
}

export default App;
