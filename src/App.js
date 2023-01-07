import { useState } from 'react';
import TodoList from './components/TodoList'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoFooter from './components/TodoFooter';

function App() {
  const [todos, steTodo] = useState([
    {
      text: "Learn react",
      id: Math.random(),
      isCompleted: false
    },
    {
      text: "Learn css",
      id: Math.random(),
      isCompleted: false
    },
    {
      text: "Learn js",
      id: Math.random(),
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos} />
      <TodoFooter/>
    </div>
  );
}

export default App;
