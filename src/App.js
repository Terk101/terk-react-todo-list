import React, { Component } from 'react';
import Todos from './components/Todos';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     todos : [
       {id: 1, task : "Meeting"}, 
       {id: 2, task : "Eatting"}
    ]
    }
  }
  onMarkComplete = (id) => {
    console.log(id);
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
