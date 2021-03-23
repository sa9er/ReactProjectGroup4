import React, { useState } from 'react';
import Todos from './Todos';


function TodoList({ todos }) {
    console.log(todos);
    return (
        <>
        <h2>TodoList</h2>
        <ul className="TodoList">
          {todos.map((todo, index) => (
            <Todos text={todo.text} key={index} />
          ))}
        </ul>
        </>
    );
}

export default TodoList;