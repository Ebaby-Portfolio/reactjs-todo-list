import { useEffect, useState } from 'react';
import './App.css';
import ListInput from './components/ListInput';
import TodoList from './components/TodoList';
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todo-list-key';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    setTodos([todo, ...todos]);
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleTodoChecked = id => {
    todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
  }

  return (
    <div className='container'>
      <ListInput addTodo={addTodo} />
      <TodoList id={uuid()}
        todos={todos}
        toggleTodoChecked={toggleTodoChecked}
        removeTodo={removeTodo} />
    </div>
  );
}

export default App;
