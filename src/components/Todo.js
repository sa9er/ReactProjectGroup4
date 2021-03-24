import React from 'react';

//css
import './Todos.css';
const Todo = ({text, i, todos, setTodos, key }) => {
    
   
    const doneHandler = () => {
     setTodos(todos.map((j) => {
         if (j.id === i.id) {
             return {
                 ...j,
                 completed: !j.completed,
             };
         }
         return j;
     })
     );

    };

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== i.id));
    }
    return (
        <div className="item" >
            <div className={`container ${i.completed ? "completed" : ''}`} >{text} </div>
            <button onClick={doneHandler} >done</button>
            <button onClick={deleteHandler}>delete</button>
            
             </div>

    );
}

export default Todo;