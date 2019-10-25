import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useToggleState from '../hooks/useToggleState';

import EditTodoForm from '../components/EditTodoForm';

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px'}}>
      {
        isEditing ? (
          <EditTodoForm
            id={id}
            task={task}
            editTodo={editTodo}
            toggle={toggle}
          />
        ) :
        <>
          <Checkbox onClick={() => toggleTodo(id)} tabIndex={-1} checked={completed} />
          <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={toggle} aria-label='Edit'>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => removeTodo(id)} aria-label='Delete'>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  )
}

export default Todo;
