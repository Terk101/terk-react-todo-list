import React, { Component } from 'react'


export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    onChange = (e) => {
        this.setState({ title: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitForm(this.state);  
        this.setState({title : ''});
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                    <input value ={this.state.title} type="text" name="title" placeholder="Add todo...." style={{ flex: '10', padding: '5px' }} onChange={this.onChange}></input>
                    <input type="submit" value="Submit" style={{ flex: '1' }}></input>
                </form>

            </div>
        )
    }
}

export default AddTodo
