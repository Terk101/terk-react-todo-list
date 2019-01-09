import React, { Component } from 'react';
import Todos from './components/Todos';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     todos : [
       {id: 1, task : "Meeting", completed : false}, 
       {id: 2, task : "Eatting", completed : false}
    ]
    }
  }
  onMarkComplete = (id) => {
    this.setState({todos : this.state.todos.map((todo) => {
      if(todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  });
  }

  render() {
    return (
      <div className="App">
        <Todos  todos = {this.state.todos} onMarkComplete = {this.onMarkComplete} />
      </div>
    );
  }
}

export default App;
