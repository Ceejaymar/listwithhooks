import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import TodoList from './TodoList';

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'clean fishtank', completed: false },
    { id: 2, task: 'Buy groceries', completed: true },
    { id: 3, task: 'Get lit', completed: false }
  ];

  const [ todos, setTodos ] = useState(initialTodos);

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
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;
