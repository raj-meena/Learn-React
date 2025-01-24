import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../../redux/todoSlice';
import TodoList from './TodoList';
import { ThemeProvider } from '../../context/ThemeContext';

// Create a test wrapper with store
const createWrapper = () => {
  const store = configureStore({
    reducer: {
      todos: todoReducer
    }
  });

  return ({ children }) => (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

describe('TodoList', () => {
  it('renders empty todo list initially', () => {
    render(<TodoList />, { wrapper: createWrapper() });
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('adds new todo when submitted', () => {
    render(<TodoList />, { wrapper: createWrapper() });
    
    // Add new todo
    const input = screen.getByPlaceholderText(/add new todo/i);
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(input.closest('form'));
    
    // Check if todo is added
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(input).toHaveValue(''); // Input should be cleared
  });

  it('toggles todo completion status', () => {
    render(<TodoList />, { wrapper: createWrapper() });
    
    // Add and toggle todo
    const input = screen.getByPlaceholderText(/add new todo/i);
    fireEvent.change(input, { target: { value: 'Toggle Test' } });
    fireEvent.submit(input.closest('form'));
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    // Todo should be marked as completed
    expect(checkbox).toBeChecked();
  });

  it('deletes todo when delete button is clicked', () => {
    render(<TodoList />, { wrapper: createWrapper() });
    
    // Add todo
    const input = screen.getByPlaceholderText(/add new todo/i);
    fireEvent.change(input, { target: { value: 'Delete Test' } });
    fireEvent.submit(input.closest('form'));
    
    // Delete todo
    fireEvent.click(screen.getByText('Delete'));
    
    // Todo should be removed
    expect(screen.queryByText('Delete Test')).not.toBeInTheDocument();
  });

  it('filters todos correctly', () => {
    render(<TodoList />, { wrapper: createWrapper() });
    
    // Add two todos
    const input = screen.getByPlaceholderText(/add new todo/i);
    fireEvent.change(input, { target: { value: 'Active Todo' } });
    fireEvent.submit(input.closest('form'));
    fireEvent.change(input, { target: { value: 'Completed Todo' } });
    fireEvent.submit(input.closest('form'));
    
    // Complete second todo
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);
    
    // Filter completed
    fireEvent.click(screen.getByText('Completed'));
    expect(screen.getByText('Completed Todo')).toBeInTheDocument();
    expect(screen.queryByText('Active Todo')).not.toBeInTheDocument();
    
    // Filter active
    fireEvent.click(screen.getByText('Active'));
    expect(screen.queryByText('Completed Todo')).not.toBeInTheDocument();
    expect(screen.getByText('Active Todo')).toBeInTheDocument();
  });
});
