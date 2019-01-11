import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, task: "Meeting", completed: false },
        { id: 2, task: "Eatting", completed: false }
      ]
    }
  }
  onMarkComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  deletTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id != id;
      })
    });
  }

  onSubmitForm = (title) => {
    console.log(title);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} onMarkComplete={this.onMarkComplete} onClickDel={this.deletTodo} onSubmitForm={this.onSubmitForm} />
        </div>
      </div>
    );
  }
}

export default App;
