import React, { Component } from "react";
import Counters from "./components/Counters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Counters />
        </header>
      </div>
    );
  }
}

export default App;
