import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styling.scss';
import reportWebVitals from './reportWebVitals';


function TodoList() {
  const [tasks, addTask] = useState("");
  const [todos, setTodos] = useState([]);
  
  const addTodo = () => {
    setTodos((t) => [...t, "*" + " " + tasks]);
  };  
  const deleteTodos = () => {
    setTodos((t) => [""]);
  }  
    
    
  
  
   

  return (
    <div className="List">
      <h1>ВАШ ПЕРЕЛІК ЗАВДАНЬ</h1>
      <input type="text" className='main-input' value={tasks} onChange={(e) => addTask(e.target.value)} />
      <button onClick={addTodo}>ДОДАТИ</button>
      <br />
      <br />
      <div className='tasks'>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
          })}  
      </div>
      <button onClick={deleteTodos}>ОЧИСТИТИ</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
