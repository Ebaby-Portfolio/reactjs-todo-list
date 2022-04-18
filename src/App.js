import { useEffect, useRef, useState } from 'react';
import './App.css';
import ListInput from './components/ListInput';
import TodoList from './components/TodoList';
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todo-list-key';

function App() {
  const [todos, setTodos] = useState([]);
  const [curTodoId, setCurTodoId] = useState(null);
  const inputRef = useRef();

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
    if (curTodoId) {
      editTodo(todo);
    }
    else {
      setTodos([todo, ...todos]);
    }
  }

  const editTodo = todoToEdit => {
    todos.map(todo => {
      if (todo.id === curTodoId) {
        todo.text = todoToEdit.text;
        setCurTodoId(null);
      }
      return todo;
    })
  }

  const setTodoIdToEdit = id => {
    setCurTodoId(id);
    todos.map(todo => {
      if (todo.id === id) {
        inputRef.current.setTodoTextFromOutside(todo.text);
      }
      return todo;
    })
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
      <ListInput addTodo={addTodo} ref={inputRef} />
      <TodoList id={uuid()}
        todos={todos}
        toggleTodoChecked={toggleTodoChecked}
        removeTodo={removeTodo}
        setTodoIdToEdit={setTodoIdToEdit}
      />
    </div>
  );
}

export default App;