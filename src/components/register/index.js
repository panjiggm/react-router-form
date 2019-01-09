import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      todos: [{ text: "Dahar" }]
    };
  }

  handleTodoInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const inputTodo = { text: this.state.input };

    this.setState({
      input: "",
      todos: this.state.todos.concat(inputTodo)
    });
  };

  removeTodoItem = clear => {
    const setTodo = this.state.todos.filter((todo, index) => {
      return index !== clear;
    });

    this.setState({
      todos: setTodo
    });
  };

  render() {
    const newTodo = this.state.todos.map((todo, index) => {
      return (
        <li key={index}>
          {" "}
          {todo.text}{" "}
          <input
            type="button"
            value="remove"
            onClick={() => this.removeTodoItem(index)}
          />
        </li>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="do something"
            value={this.state.input}
            onChange={this.handleTodoInput}
          />
          <input type="submit" value="Submit" />
        </form>
        <ul>{newTodo}</ul>
      </div>
    );
  }
}

export default Register;
