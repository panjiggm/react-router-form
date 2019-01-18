import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(counter => {
      return counterId !== counter.id;
    });

    this.setState({
      counters: counters
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
