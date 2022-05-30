import React from 'react'
import { TodoItem } from './TodoItem';


export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-4'>My Todos List</h3>
      {/* {props.todos} */}
      {props.todos.length === 0 ? <h5 className='text-center my-4'>No Todos to display</h5> :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }
    </div>
  )
}
