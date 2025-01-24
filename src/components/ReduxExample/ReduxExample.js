import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import TodoList from './TodoList';

function ReduxExample() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default ReduxExample;
