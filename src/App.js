import React, { useState } from 'react';
import './App.css';

//components
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import InputArea from './components/InputArea'

function App() {
  const [textInput, setTextInput] = useState(""); 
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1> </h1>
      <InputArea textInput={textInput} setTextInput={setTextInput} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      

    </div>
  );
}

export default App;
