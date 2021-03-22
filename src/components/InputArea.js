import React from 'react';
//import './InputArea.css';

function InputArea({ addItem, updateInput, todo }) {
  return (
    <form className="todo-form" onSubmit={(e) => addItem(e, todo)}>
      <label htmlFor="todo">Here:</label>
      <input
        id="todo"
        name="todo"
        onChange={updateInput}
        required
        type="text"
        value={todo}
      />
      <button type="submit">ADD TO</button>
    </form>
  );
}

export default InputArea;
