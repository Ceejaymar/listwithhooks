import { useState } from 'react';
import uuid from 'uuid/v4';

export default initialTodos => {
  const [ todos, setTodos ] = useState(initialTodos);

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

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo
  }
}
