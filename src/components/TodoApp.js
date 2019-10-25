import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  // const initialTodos = [
  //   { id: 1, task: 'clean fishtank', completed: false },
  //   { id: 2, task: 'Buy groceries', completed: true },
  //   { id: 3, task: 'Get lit', completed: false }
  // ];

  const [ todos, setTodos ] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    const updatedList = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedList);
  };

  const toggleTodo = todoId => {
    const updatedTodo = todos.map(todo => (
      todo.id === todoId ? {...todo, completed: !todo.completed}: todo
    ));
    setTodos(updatedTodo);
  };

  const editTodo = (todoId, updatedTask) => {
    const updatedTodo = todos.map(todo => (
      todo.id === todoId ? { ...todo, task: updatedTask }: todo
    ));
    setTodos(updatedTodo);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <Appbar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>Todo with Hooks</Typography>
        </Toolbar>
      </Appbar>
      <Grid container justify='center' style={{ marginTop: '1em' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
