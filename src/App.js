import Todo from './componenets/Todo';
import TodoForm from './componenets/TodoForm';
import { useState } from 'react';

function App() {
  const [todosList, setTodosList] = useState([]);
  const todoFormSubmitHandler = (formData) => {
    const newTodo = {
      id: Math.random(),
      ...formData,
    };
    setTodosList((previousState) => {
      return [newTodo, ...previousState];
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSave={todoFormSubmitHandler} />

      {todosList.length > 0
        ? todosList.map((item) => <Todo itemName={item.name} key={item.id} />)
        : null}
    </div>
  );
}

export default App;
