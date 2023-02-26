import React from 'react'
import './main.css';
import { useState,useEffect } from 'react'
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
            key:id,
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
        let updatedTodo= todos.map((e)=>{
            if(e.id===id){
                e.completed=!e.completed;
            }
            return e;
        })
        setTodos(updatedTodo);
    }

    const handleDelete=id=>{
        let DeletedTodo= todos.filter(e=>e.id!==id)
        setTodos(DeletedTodo);
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
    
    useEffect(() => {
      document.title='Todo List by Samyak';
    }, []);
    
    

  return (
    <div>
        <form onSubmit={handleChange} className='mt-5'>
            <input type={'text'} onChange={e=>setTextTodo(e.target.value)}/>
            <button className='buttonTodo'>Add Todo</button>
        </form>
        {elements}
    </div>
  )
}

export default Main;