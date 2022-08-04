import TodoForm from '../componenets/TodoForm';
import Todo from '../componenets/Todo';

const AllTodos = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSave={props.todoFormSubmitHandler} />

      <ul>
        {props.todosList.length > 0
          ? props.todosList.map((item) => (
              <Todo
                todoItem={item}
                key={item.id}
                setIsTodoListUpdated={props.setIsTodoListUpdated}
                isTodoListUpdated={props.isTodoListUpdated}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default AllTodos;
