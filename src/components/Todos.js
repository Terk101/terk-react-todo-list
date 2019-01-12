import React, { Component } from 'react';
import TodoItems from './TodoItems'

class Todos extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return this.props.todos.map((todo) => (
            <TodoItems key={todo.id} data={todo} onMarkCompleted={this.props.onMarkComplete} onClickDel={this.props.onClickDel} onSubmitForm={this.props.onSubmitForm} />
        ));

    }
}

export default Todos;