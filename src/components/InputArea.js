import React, { useState } from 'react';

//import './InputArea.css';

function InputArea({ addItem, setTextInput, todos }) {
  
const updateInput = (i) => {
  setTextInput(i.target.value);
  

}

 const handleSubmit = (e) => {
   e.preventDefault();
   setTodos([
     ...prev,
     {text: updateInput}
   ])

 }
  
  return (
    <form className="todo-form" onSubmit={(e) => addItem(e, todos)}>
      <label htmlFor="todo">Here:</label>
      <input
        id="todo"
        name="todo"
        onChange={updateInput}
        required
        type="text"
        value={todos}
      />
      <button type="submit">ADD TO</button>
    </form>
  );
}

export default InputArea;
