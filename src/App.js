import Todo from './componenets/Todo';
import TodoForm from './componenets/TodoForm';
import { useState, useEffect } from 'react';

// const todos = [
//   { id: 0, name: 'item1', description: 'item1 description' },
//   { id: 1, name: 'item2', description: 'item2 description' },
//   { id: 2, name: 'item3', description: 'item3 description' },
//   { id: 3, name: 'item4', description: 'item4 description' },
// ];

function App() {
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    fetch('/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTodosList([...data.tasks]);
      });
  }, []);

  const todoFormSubmitHandler = (formData) => {
    const newTodo = {
      id: todosList.length,
      ...formData,
    };
    // setTodosList((previousState) => {
    //   return [newTodo, ...previousState];
    // });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSave={todoFormSubmitHandler} />

      {todosList.length > 0
        ? todosList.map((item) => (
            <Todo
              todoItem={item}
              key={item._id}
              todosList={todosList}
              setTodosList={setTodosList}
            />
          ))
        : null}
    </div>
  );
}

export default App;
