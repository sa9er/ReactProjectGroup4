import React, { useState } from 'react';
import './App.css';

//components
import Todos from './components/Todos';
import TodoList from './components/TodoList';
import InputArea from './components/InputArea'

function App() {
  const [todos , setTodos] = useState([]);
  const [textInput, setTextInput] = useState(""); 
  return (
    <div className="App">
      <h1> </h1>
      <InputArea todos={todos} setTodos={setTodos} setTextInput={setTextInput} />
      <TodoList todos={todos} />
      

    </div>
  );
}

export default App;
