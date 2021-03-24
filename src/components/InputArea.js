import React, { useState } from 'react';

//import './InputArea.css';

function InputArea({ setTextInput, todos, setTodos, textInput }) {
  
const updateInput = (i) => {
  setTextInput(i.target.value);
}

 const handleSubmit = (e) => {
   e.preventDefault();
   setTodos([
    ...todos, 
    {text: textInput, completed: false, id: Math.random() * 1000}
   ]);
   setTextInput('');
   


 }


  return (
    <form className="todo-form" >
      <label>Here:</label>
      <input
        id="todo"
        name="todo"
        onChange={updateInput}
        required
        type="text"
        value={textInput}
      />
      <button onClick={handleSubmit} type="submit">ADD TO</button>
    </form>
  );
}

export default InputArea;
