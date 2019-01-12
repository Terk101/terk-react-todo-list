import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
//import uuid from 'uuid';
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20').then
    (res => this.setState({todos : res.data}));

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

  onSubmitForm = (task) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title : task.title,
      completed :false
    }).then(res =>  this.setState({todos : [...this.state.todos, res.data]}))
    //this.setState({todos : [...this.state.todos, newValue]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo onSubmitForm={this.onSubmitForm} />
          <Todos todos={this.state.todos} onMarkComplete={this.onMarkComplete} onClickDel={this.deletTodo} />
        </div>
      </div>
    );
  }
}

export default App;
