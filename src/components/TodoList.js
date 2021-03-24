import React from 'react';



function TodoList({ todos }) {
    
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