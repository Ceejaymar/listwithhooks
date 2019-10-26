import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if(todos.length) {
    return (
      <Paper>
        <List>
          {
            todos.map((todo, i) => (
              <div key={i}>
                <Todo
                  {...todo}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                { (i !== todos.length - 1) && <Divider /> }
              </div>
            ))
          }
        </List>
      </Paper>
    )};
    return <h1>Todo list is empty!</h1>;
};

export default TodoList;
