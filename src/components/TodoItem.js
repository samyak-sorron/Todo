import React from 'react'
const TodoItem = (props) => {
    return (
    <div className='todoItem'>
      <h4 className={props.completed? 'complete':''}>{props.text}</h4>
      <button  onClick={()=> props.handleDelete(props.id)}>Delete</button>
      <button  onClick={()=> props.handleCompleted(props.id)}>Done</button>
    </div>
  )
}

export default TodoItem;