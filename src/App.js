import React, { Component } from "react";

import Register from "./components/register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Register</h1>
          <Register />
        </header>
      </div>
    );
  }
}

export default App;
