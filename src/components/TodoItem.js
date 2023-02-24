import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.text}</h4>
      <button onClick={()=> props.handleDelete(props.id)}>Delete</button>
      <button onClick={()=> props.handleComplete(props.id)}>Complete</button>
    </div>
  )
}

export default TodoItem;