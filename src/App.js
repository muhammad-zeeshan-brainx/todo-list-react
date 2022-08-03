import Todo from './componenets/Todo';
import TodoForm from './componenets/TodoForm';

function App() {
  const todoFormSubmitHandler = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSave={todoFormSubmitHandler} />
      <Todo text="Item 1" />
      <Todo text="Item 2" />
      <Todo text="Item 3" />
      <Todo text="Item 4" />
    </div>
  );
}

export default App;
