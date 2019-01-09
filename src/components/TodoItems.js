import React, { Component } from 'react'

export class TodoItems extends Component {
    getStyle = () => {
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted'
         }
    }
   
  render() {
      const {id, task} = this.props.data;
    return (
      <div style ={this.getStyle()}>
       <p>
        <input type="checkbox" onChange = {this.props.onMarkCompleted.bind(this, id)}/>
        <h3>{ task }</h3>
        </p>
      </div>
    )
  }
}

export default TodoItems
