import React from 'react';
import TodoForm from '../componenets/TodoForm';
import Todo from '../componenets/Todo';
import '../index.css';

const AllTodos = (props) => {
  const todoItem = {
    name: '',
    description: '',
  };
  return (
    <React.Fragment>
      <h1 className="title display-2">Todo List</h1>

      <TodoForm onSave={props.todoFormSubmitHandler} todoItem={todoItem} />

      <ul className="todo-list">
        {props.todosList.length > 0
          ? props.todosList.map((item) => (
              <Todo
                todoItem={item}
                key={item.id}
                setIsTodoListUpdated={props.setIsTodoListUpdated}
                isTodoListUpdated={props.isTodoListUpdated}
              />
            ))
          : 'Loading...'}
      </ul>
    </React.Fragment>
  );
};

export default AllTodos;
