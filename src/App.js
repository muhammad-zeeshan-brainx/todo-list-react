import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import AllTodos from './pages/AllTodos';
import TodoDetail from './pages/TodoDetail';

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
        isTodoListUpdated
          ? setIsTodoListUpdated(false)
          : setIsTodoListUpdated(true);
      });
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="todos">
          <Route
            path=""
            element={
              <AllTodos
                todoFormSubmitHandler={todoFormSubmitHandler}
                todosList={todosList}
                isTodoListUpdated={isTodoListUpdated}
                setIsTodoListUpdated={setIsTodoListUpdated}
              />
            }
          />

          <Route path=":id">
            <Route path="" element={<TodoDetail />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
