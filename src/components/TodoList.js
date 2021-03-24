import React, { useState } from 'react';
import Todo from './Todo';


function TodoList({ todos, setTodos }) {
    return (
        <>
        <ul className="TodoList">

          {todos.map((todo, index) => (
            <Todos text={todo.text} key={index} />

          <h1>Todo List</h1>
          {todos.map((i, index) => (
            <Todo 
            todos={todos} 
            setTodos={setTodos} 
            text={i.text} 
            key={i.id} 
            i={i} 
            />

          ))}
        </ul>
        </>
    );
}

export default TodoList;