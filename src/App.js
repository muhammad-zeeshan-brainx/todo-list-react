import Todo from './componenets/Todo';
import TodoForm from './componenets/TodoForm';
import { useState, useEffect } from 'react';

function App() {
  const [todosList, setTodosList] = useState([]);
  const [isTodoListUpdated, setIsTodoListUpdated] = useState(false);

  useEffect(() => {
    fetch('/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTodosList([...data.tasks]);
      });
  }, [isTodoListUpdated]);

  const todoFormSubmitHandler = (formData) => {
    const newTodo = {
      id: todosList.length,
      ...formData,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    };

    fetch('/tasks', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('success');

        isTodoListUpdated
          ? setIsTodoListUpdated(false)
          : setIsTodoListUpdated(true);
      });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSave={todoFormSubmitHandler} />

      {todosList.length > 0
        ? todosList.map((item) => (
            <Todo
              todoItem={item}
              key={item.id}
              setIsTodoListUpdated={setIsTodoListUpdated}
              isTodoListUpdated={isTodoListUpdated}
            />
          ))
        : null}
    </div>
  );
}

export default App;
