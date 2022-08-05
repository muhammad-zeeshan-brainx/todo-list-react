import { useRef } from 'react';

const TodoForm = (props) => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const description = descriptionInputRef.current.value;
    props.onSave({
      name,
      description,
    });

    nameInputRef.current.value = '';
    descriptionInputRef.current.value = '';
  };

  return (
    <div>
      <h2>This is form</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          defaultValue={props.todoItem.name}
          ref={nameInputRef}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          id="description"
          defaultValue={props.todoItem.description}
          ref={descriptionInputRef}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
