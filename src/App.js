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
      <header><h1>Group 4 are awesome! </h1> </header>
      <InputArea textInput={textInput} setTextInput={setTextInput} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      

    </div>
  );
}

export default App;
