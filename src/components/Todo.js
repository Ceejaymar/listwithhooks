import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({ id, task, completed, removeTodo, toggleTodo }) => {
  return (
    <ListItem>
        <Checkbox onClick={() => toggleTodo(id)} tabIndex={-1} checked={completed} />
        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label='Edit'>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => removeTodo(id)} aria-label='Delete'>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  )
}

export default Todo;
