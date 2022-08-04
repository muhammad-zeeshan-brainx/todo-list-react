import { useState } from 'react';

const TodoForm = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionInputHandler = (e) => {
    setDescription(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSave({
      name,
      description,
    });
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>This is form</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Name</label>
        <input type="text" value={name} id="name" onChange={nameInputHandler} />
        <br />
        <label>Description</label>
        <input
          type="text"
          value={description}
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
