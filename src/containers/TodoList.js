import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {
          todos.map((todo, key) => (
            <div key={key}>
              <ListItem>
                <ListItemText>{ todo.task }</ListItemText>
              </ListItem>
              <Divider />
            </div>
          ))
        }
      </List>
    </Paper>
  );
};

export default TodoList;
