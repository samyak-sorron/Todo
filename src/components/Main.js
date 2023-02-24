import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem';

const Main = () => {
    const [todos,setTodos]=useState([]);
    const [textTodo,setTextTodo]= useState();

    const addTodo=text=>{
        let id=1;
        if(todos.length>0){
            id=todos[0].id+1;
        }
        const newTodo={
            text:text,
            id:id,
            completed:false
        }
        setTodos(()=>[newTodo,...todos]);
    }

    const handleChange=e=>{
        e.preventDefault();
        addTodo(textTodo);
    }

    const handleCompleted = id=>{
        let newTodo= todos.map((e)=>{
            if(e.id===id){
                e.completed=true;
            }
            return e;
        })
        setTodos(newTodo);
    }

    const handleDelete=id=>{
        let newTodo= todos.filter(e=>e.id!=id)
        setTodos(newTodo)
    }
    
    const elements= todos.map((eve)=>(
        <TodoItem
            text={eve.text}
            id={eve.id}
            todo={eve}
            completed={eve.completed}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
        />
    ));

    
    

  return (
    <div className='container'>
        <form onSubmit={handleChange}>
            <input type={'text'} onChange={e=>setTextTodo(e.target.value)}/>
            <button>Add Todo</button>
        </form>
        {elements}
    </div>
  )
}

export default Main;