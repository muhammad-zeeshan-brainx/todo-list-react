import { useState } from 'react';

const TodoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionInputHandler = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h2>This is form</h2>
      <form>
        <label>Name</label>
        <input type="text" id="name" onChange={nameInputHandler} /> <br />
        <label>Description</label>
        <input
          type="text"
          id="description"
          onChange={descriptionInputHandler}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
