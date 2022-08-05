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
    <div className="input-box">
      <form onSubmit={formSubmitHandler}>
        <div className="mb3">
          <div className="form-input-label">
            <label>Name</label>
          </div>

          <input
            type="text"
            id="name"
            className="form-control form-input"
            defaultValue={props.todoItem.name}
            ref={nameInputRef}
          />
        </div>

        <div className="mb3">
          <div className="form-input-label">
            <label>Description</label>
          </div>

          <input
            type="text"
            id="description"
            className="form-control form-input"
            defaultValue={props.todoItem.description}
            ref={descriptionInputRef}
          />
        </div>

        <div className="form-btn">
          <button type="submit" className="add-btn btn btn-success">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
