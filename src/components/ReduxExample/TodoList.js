import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, setFilter, selectTodos, selectFilter } from '../../redux/todoSlice';
import { useTheme } from '../../context/ThemeContext';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const currentFilter = useSelector(selectFilter);
  const { theme } = useTheme();

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme.background,
      color: theme.text,
      borderRadius: '8px'
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: `1px solid ${theme.secondary}`,
      backgroundColor: theme.background,
      color: theme.text
    },
    button: {
      backgroundColor: theme.primary,
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '5px'
    },
    todoItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      marginBottom: '5px',
      backgroundColor: theme.secondary + '20',
      borderRadius: '4px'
    },
    completed: {
      textDecoration: 'line-through',
      opacity: 0.7
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo('');
    }
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div style={styles.container}>
      <h2>Redux Todo Example</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          style={styles.input}
        />
      </form>

      <div style={{ marginBottom: '20px' }}>
        <button
          style={{
            ...styles.button,
            opacity: currentFilter === 'all' ? 1 : 0.7
          }}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          style={{
            ...styles.button,
            opacity: currentFilter === 'active' ? 1 : 0.7
          }}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </button>
        <button
          style={{
            ...styles.button,
            opacity: currentFilter === 'completed' ? 1 : 0.7
          }}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>

      <div>
        {todos.map(todo => (
          <div key={todo.id} style={styles.todoItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={todo.completed ? styles.completed : null}>
              {todo.text}
            </span>
            <button
              style={{ ...styles.button, marginLeft: 'auto' }}
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Redux Concepts Demonstrated:</h3>
        <ul>
          <li>Store Configuration</li>
          <li>Slice Creation</li>
          <li>Actions & Reducers</li>
          <li>Selectors</li>
          <li>useDispatch & useSelector hooks</li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
