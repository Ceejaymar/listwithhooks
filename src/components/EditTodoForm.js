import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../hooks/useInputState';

const EditTodoForm = ({ id, task, editTodo, toggle }) => {
  const [value, setValue, reset] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={setValue}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
