import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all' // all, active, completed
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

// Export actions
export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;

// Export selectors
export const selectTodos = state => {
  const todos = state.todos.todos;
  const filter = state.todos.filter;
  
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export const selectFilter = state => state.todos.filter;

export default todoSlice.reducer;
