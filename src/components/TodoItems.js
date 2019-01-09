import React, { Component } from 'react'

export class TodoItems extends Component {
    getStyle = () => {
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted'
         }
    }

    getBtnStyle = () => {
      return {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
      }

    }
   
  render() {
      const {id, task} = this.props.data;
    return (
      <div style ={this.getStyle()}>
       <p>
        <input type="checkbox" onChange = {this.props.onMarkCompleted.bind(this, id)}/>
        <h3>{ task }</h3>
        <button style ={this.getBtnStyle()} onClick={this.props.onClickDel.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

export default TodoItems
